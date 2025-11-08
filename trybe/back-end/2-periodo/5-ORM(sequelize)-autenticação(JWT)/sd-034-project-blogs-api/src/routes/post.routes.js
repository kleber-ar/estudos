const express = require('express');
const { create, getAll } = require('../controllers/post.controller');
const validateToken = require('../middlewares/auth');
const validatePost = require('../middlewares/validatePost');

const router = express.Router();

router.post('/', validateToken, validatePost, create);
router.get('/', validateToken, getAll);

module.exports = router;
