const CompensationRequest = require('../models/CompensationRequest');

const createCompensationRequest = async (req, res) => {
  try {
    const request = await CompensationRequest.create({ ...req.body, user: req.user.id });
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCompensationRequests = async (req, res) => {
  try {
    const requests = await CompensationRequest.find().populate('user');
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCompensationRequestById = async (req, res) => {
  try {
    const request = await CompensationRequest.findById(req.params.id).populate('user');
    if (!request) return res.status(404).json({ message: 'Request not found' });
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCompensationRequestStatus = async (req, res) => {
  try {
    const request = await CompensationRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!request) return res.status(404).json({ message: 'Request not found' });
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCompensationRequest,
  getCompensationRequests,
  getCompensationRequestById,
  updateCompensationRequestStatus,
};