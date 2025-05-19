const express = require('express');
const { login, register, getProfile } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Authentication Routes
router.post('/login', login);
router.post('/register', register);
router.get('/profile', authMiddleware, getProfile);

module.exports = router;
