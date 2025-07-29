const User = require("../models/userModel");
const STATUS=require('../utils/constant');

registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    await user.save();
    res
      .status(STATUS.CREATED)
      .json({ success: true, message: STATUS.MSG_USER_CREATED });
  } catch (error) {
    res.status(STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: error.message });
    next(error);
  }
};

getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(STATUS.SUCCESS).json(users);
  } catch (error) {
    next(error);
  }
};

getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(STATUS.NOT_FOUND).json({ success: false, message:STATUS.MSG_USER_NOT_FOUND });
    }
    res.status(STATUS.SUCCESS).json(user);
  } catch (error) {
    next(error);
  }
};

updateById = async (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, { username, email });
    if (!updatedUser) {
      res.status(STATUS.NOT_FOUND).json({ message:STATUS.MSG_USER_NOT_FOUND });
    }
    res.status(STATUS.SUCCESS).json({ message: STATUS.MSG_USER_UPDATED, user: updatedUser });
  } catch (error) {
    next(error);
  }
};

deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteuser = await User.findByIdAndDelete(id);
    if (!deleteuser) {
      res.status(STATUS.NOT_FOUND).json({ message: STATUS.MSG_USER_NOT_FOUND });
    }
    res.status(STATUS.SUCCESS).json({ message: STATUS.MSG_USER_DELETED });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  REGISTER: registerUser,
  GETALL: getAllUsers,
  DELETEUSER: deleteById,
  UPDATEUSER: updateById,
  GETUSERBYID: getUserById,
};
