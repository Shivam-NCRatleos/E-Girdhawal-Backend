const express = require('express');
const { getDashboardStats, getGraphs } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

const router = express.Router();

// Admin Dashboard Routes
router.get('/stats', authMiddleware, adminMiddleware, getDashboardStats);
router.get('/graphs', authMiddleware, adminMiddleware, getGraphs);

module.exports = router;