const express = require("express");
const routes = express.Router();
const userController = require("../controllers/userController");

routes.post("/addUser", userController.REGISTER);
routes.get("/getAllUsers", userController.GETALL);
routes.get("/getUserById/:id", userController.GETUSERBYID);
routes.delete("/deleteUser/:id", userController.DELETEUSER);
routes.put("/updateUser/:id", userController.UPDATEUSER);

module.exports = routes;
