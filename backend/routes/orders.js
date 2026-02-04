
import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const orders = await db.collection("orders").find().toArray();
  res.json(orders);
});

router.post("/", async (req, res) => {
  const order = req.body;
  await db.collection("orders").insertOne(order);
  res.json({ message: "Order created" });
});

export default router;
