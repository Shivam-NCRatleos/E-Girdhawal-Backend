const Dispute = require('../models/dispute');

const createDispute = async (req, res) => {
  try {
    const dispute = await Dispute.create({ ...req.body, user: req.user.id });
    res.status(201).json(dispute);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDisputes = async (req, res) => {
  try {
    const disputes = await Dispute.find().populate('user');
    res.status(200).json(disputes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDisputeById = async (req, res) => {
  try {
    const dispute = await Dispute.findById(req.params.id).populate('user');
    if (!dispute) return res.status(404).json({ message: 'Dispute not found' });
    res.status(200).json(dispute);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDisputeStatus = async (req, res) => {
  try {
    const dispute = await Dispute.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!dispute) return res.status(404).json({ message: 'Dispute not found' });
    res.status(200).json(dispute);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createDispute, getDisputes, getDisputeById, updateDisputeStatus };