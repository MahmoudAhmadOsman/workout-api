const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
});

//Create static signup method
userSchema.statics.signup = async function (firstName, email, password) {
	// validate firstName, email and password
	if (!firstName || !email || !password) {
		throw Error("All fields must be filled!");
	}
	if (validator.isEmpty(firstName)) {
		throw new Error("First name is required!");
	}
	if (!validator.isLength(firstName, { min: 2 })) {
		throw new Error("First name must be more than 2 characters!");
	}
	if (!validator.isEmail(email)) {
		throw Error("Email is not valid!");
	}
	if (!validator.isStrongPassword(password)) {
		throw Error("Password is not strong enough!");
	}

	//check if email already exists
	const exists = await this.findOne({ email });
	if (exists) {
		throw Error("Email already in use!");
	}

	// now hash the password
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);
	//create user
	const user = await this.create({ firstName, email, password: hash });
	return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
	if (!email || !password) {
		throw Error("All fields must be filled!");
	}

	//find user by email
	const user = await this.findOne({ email });

	//check email
	if (!user) {
		throw Error("Incorrect email address!");
	}

	//check if password matches
	const match = await bcrypt.compare(password, user.password);
	if (!match) {
		throw Error("Incorrect password!");
	}
	return user;
};

module.exports = mongoose.model("User", userSchema);
