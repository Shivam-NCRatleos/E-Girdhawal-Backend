const Chat = require('../models/chat');

const sendMessage = async (req, res) => {
  try {
    const message = await Chat.create({ ...req.body, sender: req.user.id });
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMessagesForUser = async (req, res) => {
  try {
    const messages = await Chat.find({ sender: req.user.id }).populate('receiver');
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMessagesForAdmin = async (req, res) => {
  try {
    const messages = await Chat.find().populate('sender receiver');
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { sendMessage, getMessagesForUser, getMessagesForAdmin };