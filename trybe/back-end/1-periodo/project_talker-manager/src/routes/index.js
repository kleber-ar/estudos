
const express = require('express');
const talkerRoutes = require('./talkerRoutes');
const loginRoutes = require('./loginRoutes');

const router = express.Router();

router.use('/talker', talkerRoutes);
router.use('/login', loginRoutes);

module.exports = router;
