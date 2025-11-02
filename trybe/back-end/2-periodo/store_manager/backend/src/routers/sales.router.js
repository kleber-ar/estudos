const express = require('express');

const router = express.Router();
const salesController = require('../controllers/sales.controller');
const validateSales = require('../middlewares/validateSales');

router.get('/', salesController.listSales);
router.get('/:id', salesController.getSaleById);

router.post('/', validateSales, salesController.createSale);

router.delete('/:id', salesController.deleteSale);

module.exports = router;
