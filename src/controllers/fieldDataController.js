const FieldDataRequest = require('../models/fieldDataRequest');

const createFieldDataRequest = async (req, res) => {
  try {
    const request = await FieldDataRequest.create({ ...req.body, user: req.user.id });
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFieldDataRequests = async (req, res) => {
  try {
    const requests = await FieldDataRequest.find().populate('user');
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFieldDataRequestById = async (req, res) => {
  try {
    const request = await FieldDataRequest.findById(req.params.id).populate('user');
    if (!request) return res.status(404).json({ message: 'Request not found' });
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFieldDataRequest,
  getFieldDataRequests,
  getFieldDataRequestById,
};