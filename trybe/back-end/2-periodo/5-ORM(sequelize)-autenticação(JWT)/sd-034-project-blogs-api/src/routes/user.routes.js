const express = require('express');

const router = express.Router();
const { create, getAll, getById, deleteMe } = require('../controllers/user.controller');
const validateUser = require('../middlewares/validateUser');
const auth = require('../middlewares/auth');

router.post('/', validateUser, create);
router.get('/', auth, getAll);
router.get('/:id', auth, getById);
router.delete('/me', auth, deleteMe);

module.exports = router;
