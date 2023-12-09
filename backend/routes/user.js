const express = require("express");

// controller functions
const {
	loginUser,
	signupUser,
	getAllUsers,
	deleteUser,
	getUser,
} = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

//get all users
router.get("/list", getAllUsers);

router.get("/:id", getUser);

//delete user
router.delete("/:id", deleteUser);

module.exports = router;
