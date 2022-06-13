import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("product", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  codprod: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});
