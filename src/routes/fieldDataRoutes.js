const express = require('express');
const {
  createFieldDataRequest,
  getFieldDataRequests,
  getFieldDataRequestById,
} = require('../controllers/fieldDataController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

const router = express.Router();

// Field Data Request Routes
router.post('/', authMiddleware, createFieldDataRequest);
router.get('/', authMiddleware, adminMiddleware, getFieldDataRequests);
router.get('/:id', authMiddleware, getFieldDataRequestById);

module.exports = router;