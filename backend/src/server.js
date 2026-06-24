import express from "express";
import sequelize from "./config/database.js";
import cors from "cors";
import "./models/Produto.js";
import produtoRoutes from "./routes/produtoRoutes.js";
import admRouter from "./routes/admRoutes.js";
import { initData } from "./config/seed.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", admRouter);
app.use("/produtos", produtoRoutes);

const PORT = process.env.PORT || 3000;

try {
  await sequelize.sync();
  await initData();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.error("Failed to connect to the database:", error);
}
