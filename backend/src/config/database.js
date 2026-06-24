import { Sequelize } from "sequelize";
import path from "path";
import { fileURLToPath } from "url";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
  logging: false,
});

export default sequelize;
