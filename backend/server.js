import express from "express";
import cors from "cors";

import productsRoutes from "./routes/products.js";
import ordersRoutes from "./routes/orders.js";
import reviewsRoutes from "./routes/reviews.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/reviews", reviewsRoutes);

app.get("/", (req, res) => {
  res.send("Online Store API is running");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
