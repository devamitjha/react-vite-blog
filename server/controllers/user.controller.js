import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// GET all users (remove password)
export const getUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ error: err });

    const safeUsers = results.map(({ password, ...rest }) => rest);
    res.json(safeUsers);
  });
};

// REGISTER USER
export const createUser = async (req, res) => {
  try {
    const { full_name, email, password, role, status, social_links } = req.body;

    // Check required fields
    if (!full_name || !email || !password)
      return res.status(400).json({ message: "Full name, email, and password are required" });

    // Check if user exists
    db.query("SELECT id FROM users WHERE email = ?", [email], async (err, results) => {
      if (err) return res.status(500).json(err);

      if (results.length > 0)
        return res.status(400).json({ message: "Email already registered" });

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Prepare columns
      let columns = ["full_name", "email", "password"];
      let values = [full_name, email, hashedPassword];

      if (social_links) {
        columns.push("social_links");
        values.push(JSON.stringify(social_links));
      }

      if (role) {
        columns.push("role");
        values.push(role);
      }

      if (status) {
        columns.push("status");
        values.push(status);
      }

      const sql = `
        INSERT INTO users (${columns.join(",")})
        VALUES (${columns.map(() => "?").join(",")})
      `;

      db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json({ error: err });

        res.json({ message: "User created successfully", user_id: result.insertId });
      });
    });
  } catch (error) {
    res.status(500).json(error);
  }
};


// LOGIN USER
export const loginUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email and password are required" });

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json(err);

    if (results.length === 0)
      return res.status(400).json({ message: "User not found" });

    const user = results[0];

    // Compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ message: "Invalid password" });

    // Create JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Remove password before sending
    delete user.password;

    res.json({
      message: "Login successful",
      token,
      user,
    });
  });
};
