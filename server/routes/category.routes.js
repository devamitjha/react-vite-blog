import express from "express";
import {
  getCategories,
  createCategory,
  getPostsByCategory
} from "../controllers/category.controller.js";

const router = express.Router();

router.get("/all-categories", getCategories);
router.get("/:slug", getPostsByCategory);
router.post("/create-category", createCategory);

export default router;
