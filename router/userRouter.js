const express = require("express");
const {
  getAllUser,
  createNewUser,
  updateUser,
  removeUser,
  nameInList,
  login,
} = require("../controller/userController");
const router = express.Router();

router.get("/", getAllUser);

router.post("/", createNewUser);

router.put("/:id", updateUser);

router.delete("/:id", removeUser);

router.get("/name", nameInList);

router.post("/login", login);

module.exports = router;
