import db from "../config/db.js";

export const getCategories = (req, res) => {
  db.query("SELECT * FROM categories", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

export const getPostsByCategory = (req, res) => {
  const { slug } = req.params;

  const sql = `
    SELECT 
      posts.id,
      posts.title,
      posts.slug,
      posts.excerpt,
      posts.featured_image,
      posts.created_at,
      posts.view_count,
      posts.like_count,

      users.full_name AS user_name,
      users.slug AS user_url,
      users.profile_image,

      categories.id AS category_id,
      categories.name AS category_name,
      categories.slug AS category_slug

    FROM posts
    INNER JOIN users ON users.id = posts.user_id
    INNER JOIN categories ON categories.id = posts.category_id
    WHERE categories.slug = ?
    ORDER BY posts.created_at DESC
  `;

  db.query(sql, [slug], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
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
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Category created", id: result.insertId });
  });
};
