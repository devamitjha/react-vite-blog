import express from "express";
import { getCategories, createCategory } from "../controllers/category.controller.js";

const router = express.Router();

router.get("/all-categories", getCategories);
router.post("/create-category", createCategory);

export default router;
