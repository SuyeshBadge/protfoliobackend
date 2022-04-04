const User = require('./../models/UserModel');

exports.createUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    console.log(`hiii`);
    console.log(req.body);
    await newUser.save();

    res.status(200).json({ user: newUser }); // Returns the new user that is created in the database
  } catch (error) {
    console.error(error);
  }
};
exports.getUsers = async(req, res, next) => {
  const data = await User.findAll({});
  res.json(data);
};
