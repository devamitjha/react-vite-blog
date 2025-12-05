import db from "../config/db.js";

// GET users
export const getUsers = (req, res) => {
    console.log("get user");
    db.query("SELECT * FROM users", (err, results) => {
        if (err) return res.status(500).json({ error: err });
        const safeUsers = results.map(user => {
            delete user.password;
            return user;
        });
        res.json(safeUsers);
    });
};

// POST create user
export const createUser = (req, res) => {
    const { full_name, email, password, role, status, social_links } = req.body;

    let columns = ["full_name", "email", "password"];
    let values = [full_name, email, password];

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
        res.json({ message: "User created", id: result.insertId });
    });
};

