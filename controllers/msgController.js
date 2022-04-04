const Msg = require('./../models/MessageModel');

exports.createMsg = async (req, res, next) => {
  try {
    const newMsg = new Msg(req.body);
    await newMsg.save();
    res.status(200).json({ Success: true });
  } catch (e) {
    res.status(400).json(e.message);
  }
};
exports.getMsg = async (req, res, next) => {
  try {
    const data = await Msg.findAll();
    res.json(data);
  } catch (e) {
    res.status(400).json(e.message);
  }
};
