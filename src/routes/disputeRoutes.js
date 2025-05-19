const express = require('express');
const {
  createDispute,
  getDisputes,
  getDisputeById,
  updateDisputeStatus,
} = require('../controllers/disputeController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

const router = express.Router();

// Dispute Management Routes
router.post('/', authMiddleware, createDispute);
router.get('/', authMiddleware, adminMiddleware, getDisputes);
router.get('/:id', authMiddleware, getDisputeById);
router.patch('/:id', authMiddleware, adminMiddleware, updateDisputeStatus);

module.exports = router;
