const User = require('../models/user');
const CompensationRequest = require('../models/CompensationRequest');
const FieldDataRequest = require('../models/fieldDataRequest');
const Dispute = require('../models/dispute');

const getDashboardStats = async (req, res) => {
  try {
    const usersCount = await User.countDocuments();
    const compensationRequestsCount = await CompensationRequest.countDocuments();
    const fieldDataRequestsCount = await FieldDataRequest.countDocuments();
    const disputesCount = await Dispute.countDocuments();

    res.status(200).json({
      usersCount,
      compensationRequestsCount,
      fieldDataRequestsCount,
      disputesCount,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getGraphs = async (req, res) => {
  try {
    // Example: Data for graphs
    res.status(200).json({ message: 'Graph data endpoint' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getDashboardStats, getGraphs };