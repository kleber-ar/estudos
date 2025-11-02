const express = require('express');
const productsController = require('../controllers/products.controller');
const validateProductName = require('../middlewares/validateProductName');

const router = express.Router();

router.get('/', productsController.listProducts);
router.get('/:id', productsController.getProductById);

router.post('/', validateProductName, productsController.createProduct);

router.put('/:id', productsController.updateProduct);

module.exports = router;
