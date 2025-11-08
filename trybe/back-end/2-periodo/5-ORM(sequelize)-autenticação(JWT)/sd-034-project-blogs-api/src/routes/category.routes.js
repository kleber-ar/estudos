const express = require('express');
const validateToken = require('../middlewares/auth');
const categoryController = require('../controllers/category.controller');

const router = express.Router();

router.post('/', validateToken, categoryController.create);

module.exports = router;
