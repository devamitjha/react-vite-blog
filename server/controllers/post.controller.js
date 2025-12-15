import db from "../config/db.js";

export const getAllPosts = (req, res) => {
  const sql = `
    SELECT
      posts.*,
      users.id AS user_id,
      users.full_name AS user_name,
      users.slug AS user_url,
      users.profile_image,
      users.bio,
      categories.slug AS category_url,
      categories.name AS category_name
    FROM posts
    INNER JOIN users ON users.id = posts.user_id
    INNER JOIN categories ON categories.id = posts.category_id
  `;

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

export const singlePost = (req, res) => {
   const { slug } = req.params;

  const sql = `
    SELECT 
      posts.*,
      users.full_name AS user_name,
      users.slug AS user_url,
      users.social_links,
      users.profile_image,
      users.bio,
      categories.id AS category_id,
      categories.name AS category_name,
      categories.slug AS category_url
    FROM posts
    INNER JOIN users ON users.id = posts.user_id
    INNER JOIN categories ON categories.id = posts.category_id
    WHERE posts.slug = ?
    LIMIT 1
  `;

  db.query(sql, [slug], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(results[0]);
  });
};