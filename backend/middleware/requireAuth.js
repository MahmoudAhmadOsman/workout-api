const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const requireAuth = async (req, res, next) => {
	//1. verify user is authenticated
	const { autherization } = req.headers;

	if (!autherization) {
		res.status(401).json({ message: "Authorized token required!" });
	}

	//2. get the token from the header
	const token = autherization.split(" ")[1];
	//3. verify the token
	try {
		const { _id } = jwt.verify(token, process.env.SECRET);
		req.user = await User.findOne({ _id }).select("_id"); // get the id not everything

		next();
	} catch (error) {
		console.log(error);
		res.status(401).json({ error: "Request is not authorized!" });
	}
};

module.exports = requireAuth;
