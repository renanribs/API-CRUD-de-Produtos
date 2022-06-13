import ProductRepository from "../models/productsModel.js";

function findAll(req, res) {
  ProductRepository.findAll().then((result) => res.json(result));
}

function findProduct(req, res) {
  ProductRepository.findByPk(req.params.id).then((result) => res.json(result));
}

function addProduct(req, res) {
  ProductRepository.create({
    codprod: req.body.codprod,
    description: req.body.description,
    price: req.body.price,
    CODOPERACAO: req.body.CODOPERACAO,
  }).then((result) => res.json(result));
}

async function updateProduct(req, res) {
  await ProductRepository.update(
    {
      codprod: req.body.codprod,
      description: req.body.description,
      price: req.body.price,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  ProductRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteProduct(req, res) {
  await ProductRepository.update(
    { CODOPERACAO: req.body.CODOPERACAO },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  ProductRepository.findByPk(req.params.id).then((result) => res.json(result));
}

export default {
  findAll,
  addProduct,
  findProduct,
  updateProduct,
  deleteProduct,
};
