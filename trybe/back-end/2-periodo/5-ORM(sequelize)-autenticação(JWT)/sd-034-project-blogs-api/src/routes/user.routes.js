const express = require('express');

const router = express.Router();
const { create, getAll, getById } = require('../controllers/user.controller');
const validateUser = require('../middlewares/validateUser');
const auth = require('../middlewares/auth');

router.post('/', validateUser, create);

router.get('/', auth, getAll);

router.get('/:id', auth, getById);

module.exports = router;
