const express = require("express");

// controller functions
const {
	loginUser,
	signupUser,
	getAllUsers,
} = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

//get all users

router.get("/", getAllUsers);

module.exports = router;
