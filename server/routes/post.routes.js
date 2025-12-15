import express from "express";
import { getAllPosts, singlePost } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/all-posts", getAllPosts);
router.get("/:slug", singlePost);

export default router;
