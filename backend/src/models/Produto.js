import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Produto = sequelize.define(
  "Produto",
  {
    nome: {
      type: DataTypes.TEXT,
      primaryKey: true,
      allowNull: false,
    },
    url_img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    val: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    tableName: "produtos",
    timestamps: false,
  }
);

export default Produto;
