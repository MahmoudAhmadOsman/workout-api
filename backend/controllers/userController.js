const mongoose = require("mongoose");

const User = require("../models/userModel");
// login a user
const loginUser = async (req, res) => {
	res.json({ mssg: "login user" });
};

// signup a user
const signupUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		// const user = await User.create({ email, password });
		// user signup method that is inside userModel
		const user = await User.signup(email, password);
		res.status(200).json(user);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
}; // res.json({ mssg: "signup user" });

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

//get user by it
const getUser = async (req, res) => {
	const { id } = req.params;

	//if id is valid
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such user" });
	}
	//if there is an id
	const user = await User.findById(id);
	if (!user) {
		return res.status(404).json({ error: "No such user" });
	}
	res.status(200).json(user); // return the id with 200 status
};

const deleteUser = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).json({ error: "No such user" });
	}

	const user = await User.findOneAndDelete({ _id: id });

	if (!user) {
		return res.status(400).json({ error: "No such user" });
	}

	// res.status(200).json(user);
	res.json(`User with ${id} has been deleted`);
};

module.exports = {
	signupUser,
	loginUser,
	getAllUsers,
	getUser,
	deleteUser,
};
