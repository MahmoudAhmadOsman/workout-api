const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
userSchema.statics.signup = async function (email, password) {
	//check if email already exists
	const exists = await this.findOne({ email });
	if (exists) {
		throw Error("Email already in use!");
	}

	// now hash the password
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);
	//create user
	const user = await this.create({ email, password: hash });
	return user;
};

module.exports = mongoose.model("User", userSchema);
