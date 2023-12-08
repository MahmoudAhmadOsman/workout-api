const User = require("../models/userModel");
// login a user
const loginUser = async (req, res) => {
	res.json({ mssg: "login user" });
};

// signup a user
const signupUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.create({ email, password });
		res.status(200).json(user);
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ error: e.message });
		return;
	}

	// res.json({ mssg: "signup user" });
};

//get all users

const getAllUsers = async (req, res) => {
	try {
		const users = await User.find({}).sort({ createdAt: -1 });
		res.status(200).json(users);
	} catch (error) {
		next(error);
	}

	// res.json({ message: "get all users" });
};

module.exports = { signupUser, loginUser, getAllUsers };
