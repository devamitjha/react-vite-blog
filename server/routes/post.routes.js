import express from "express";
import { getAllPosts } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/all-posts", getAllPosts);

export default router;
