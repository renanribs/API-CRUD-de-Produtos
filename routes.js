import express from "express";
import products from "./src/controllers/products.js";

const routes = express.Router();

routes.get("/products", products.findAll);

export { routes as default };
