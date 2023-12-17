require("dotenv").config();

const express = require("express");

var cors = require("cors");

const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const workoutRoutes = require("./routes/workouts");
// express app
const app = express();
app.use(cors());

// middleware
app.use(express.json());

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// routes
app.use("/api/workouts", workoutRoutes);

app.use("/api/user", userRoutes);

//DATABASE CONNECTION SETUP
mongoose
	.connect(process.env.MONGO_URI || "mongodb://localhost/paysiiDB")
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log("Connected to MongoDB  ");
			console.log("Server running on PORT: ", process.env.PORT);
		});
	})
	.catch((error) => {
		console.log(error.message);
	});
