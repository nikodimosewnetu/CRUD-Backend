const express = require("express");
const router = express.Router();
const { getProducts, getSingleProduct, CreateProduct, UpdateProduct, DeleteProduct } = require("../controllers/product.controller.js");



router.get('/', getProducts)

router.get('/:id', getSingleProduct)

router.post('/', CreateProduct);

router.put('/:id', UpdateProduct);

router.delete('/:id', DeleteProduct)

module.exports = router;
