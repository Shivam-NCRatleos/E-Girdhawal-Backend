const mongoose = require('mongoose');

const fieldDataRequestSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'processed'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('FieldDataRequest', fieldDataRequestSchema);