import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.getConnection((err) => {
    if (err) {
        console.log("Database connection error:", err);
    } else {
        console.log("MySQL Connected");
    }
});

export default db;
