const express = require('express');

const router = express.Router();
const salesController = require('../controllers/sales.controller');

router.get('/', salesController.listSales);
router.get('/:id', salesController.getSaleById);

module.exports = router;
