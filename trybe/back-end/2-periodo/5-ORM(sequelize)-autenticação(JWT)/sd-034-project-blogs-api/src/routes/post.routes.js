const express = require('express');
const { create, getAll, getById, update } = require('../controllers/post.controller');
const validateToken = require('../middlewares/auth');
const validatePost = require('../middlewares/validatePost');

const router = express.Router();

router.post('/', validateToken, validatePost, create);
router.get('/', validateToken, getAll);
router.get('/:id', validateToken, getById);
router.put('/:id', validateToken, validatePost, update);

module.exports = router;
