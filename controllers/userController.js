const User = require("../models/userModel");

register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    await user.save();
    res
      .status(200)
      .json({ success: true, message: "User Registered Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
    next(error);
  }
};

getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error " });
    next(error);
  }
};

getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(400).json({ success: false, message: "User Not Found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Invalid user " });
  }
};

updateById = async (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, { username, email });
    if (!updatedUser) {
      res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json({ message: "User Update", user: updatedUser });
  } catch (error) {
    res.status(400).json({ message: "update failed", error: error.message });
  }
};

deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteuser = await User.findByIdAndDelete(id);
    if (!deleteuser) {
      res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    res.status(400).json({ message: "Failed to Delete", err: error.message });
  }
};

module.exports = {
  REGISTER: register,
  GETALL: getAllUsers,
  DELETEUSER: deleteById,
  UPDATEUSER: updateById,
  GETUSERBYID: getUserById,
};
