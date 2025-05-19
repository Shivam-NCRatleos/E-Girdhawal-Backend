const express = require('express');
const {
  createCompensationRequest,
  getCompensationRequests,
  getCompensationRequestById,
  updateCompensationRequestStatus,
} = require('../controllers/compensationController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

const router = express.Router();

// Compensation Request Routes
router.post('/', authMiddleware, createCompensationRequest);
router.get('/', authMiddleware, adminMiddleware, getCompensationRequests);
router.get('/:id', authMiddleware, getCompensationRequestById);
router.patch('/:id', authMiddleware, adminMiddleware, updateCompensationRequestStatus);

module.exports = router;
