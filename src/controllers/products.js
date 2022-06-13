import ProductRepository from "../models/productsModel.js";

async function findAll(req, res) {
  const products = await ProductRepository.findAll();
  res.json(products);
}

export default { findAll };
