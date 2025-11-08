const express = require('express');
const { create } = require('../controllers/post.controller');
const validateToken = require('../middlewares/auth');
const validatePost = require('../middlewares/validatePost');

const router = express.Router();

router.post('/', validateToken, validatePost, create);

module.exports = router;
