import express from "express";
import products from "./src/controllers/products.js";

const routes = express.Router();

routes.get("/products", products.findAll);
routes.post("/products", products.addProduct);
routes.get("/products/:id", products.findProduct);
routes.put("/products/:id", products.updateProduct);
routes.delete("/products/:id", products.deleteProduct);

export { routes as default };
