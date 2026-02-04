import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await db.collection("products").find().toArray();
  res.json(products);
});

export default router;
