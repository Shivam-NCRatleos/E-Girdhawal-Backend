const express = require('express');
const { sendMessage, getMessagesForUser, getMessagesForAdmin } = require('../controllers/chatController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

const router = express.Router();

// Chat Routes
router.post('/', authMiddleware, sendMessage);
router.get('/user/:id', authMiddleware, getMessagesForUser);
router.get('/admin', authMiddleware, adminMiddleware, getMessagesForAdmin);

module.exports = router;