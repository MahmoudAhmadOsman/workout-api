// login a user
const loginUser = async (req, res) => {
	res.json({ mssg: "login user" });
};

// signup a user
const signupUser = async (req, res) => {
	res.json({ mssg: "signup user" });
};

//get all users

const getAllUsers = async (req, res) => {
	res.json({ mssg: "get all users" });
};

module.exports = { signupUser, loginUser, getAllUsers };
