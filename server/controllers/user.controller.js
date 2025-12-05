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
    const { full_name, email, password, role, status } = req.body;
     console.log("create user");

    // const sql = `
    //     INSERT INTO users (full_name, email, password, role, status)
    //     VALUES (?, ?, ?, ?, ?)
    // `;

    // db.query(sql, [full_name, email, password, role, status], (err, result) => {
    //     if (err) return res.status(500).json({ error: err });
    //     res.json({ message: "User created", user_id: result.insertId });
    // });
};
