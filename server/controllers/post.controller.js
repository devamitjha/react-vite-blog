import db from "../config/db.js";

export const getAllPosts = (req, res) => {
  db.query(
    `SELECT
        posts.*,
        users.id AS user_id,
        users.full_name as user_name,
        users.email as user_email,
        users.social_links,
        users.role,
        users.profile_image,
        categories.id AS category_id,
        categories.name as category_name,
        categories.description as category_desc,
        categories.image as category_image
     FROM posts
     INNER JOIN users ON users.id = posts.user_id
     INNER JOIN categories ON categories.id = posts.category_id`,
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    }
  );
};
