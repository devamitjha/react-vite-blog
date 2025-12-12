import db from "../config/db.js";

export const getCategories = (req, res) => {
    db.query("SELECT * FROM categories", (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
};

export const createCategory = (req, res) => {
    const { name, slug, description } = req.body;

    const sql = `
        INSERT INTO categories (name, slug, description)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [name, slug, description], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Category created", id: result.insertId });
    });
};
