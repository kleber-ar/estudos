const express = require('express');

const router = express.Router();
const { create, getAll } = require('../controllers/user.controller');
const validateUser = require('../middlewares/validateUser');
const auth = require('../middlewares/auth');

router.post('/', validateUser, create);

router.get('/', auth, getAll);

module.exports = router;
