const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
//user token

const createToken = (_id) => {
	return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

// login a user
const loginUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.login(email, password);

		// create a token
		const token = createToken(user._id);
		//res.status(200).json({ firstName, email, token }); //send back firstName,email and password
		res.status(200).json({ email, token }); // only send back email and token when logged in
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// signup a user
const signupUser = async (req, res) => {
	const { firstName, email, password } = req.body;

	try {
		// const user = await User.create({ email, password });
		// user signup method that is inside userModel

		const user = await User.signup(firstName, email, password);

		//create the token before signing up the user
		const token = createToken(user._id);

		// res.status(200).json(user); // testing only: don't send everything

		//Only send back the email and the token, no need for other info when using POSTMAN
		res.status(200).json({ email, token });
		// res.status(200).json({ firstName, email, token });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
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

//get user by it
const getUser = async (req, res) => {
	const { id } = req.params;

	//if id is valid
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such user" });
	}
	//if there is an id
	const user = await User.findById(id);
	// const user = await User.findOne({ _id: id }).populate("user", ["firstName", "email"]);
	//
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
