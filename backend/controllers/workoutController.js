const mongoose = require("mongoose");
const Workout = require("../models/workoutModel");

 
// get all workouts
const getWorkouts = async (req, res) => {
	const user_id = req.user._id;
	const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 }); //Limit each user to only see his work by using the user_id and pass find({}) by the user id

	res.status(200).json(workouts);
};

//get new workout
const createWorkout = async (req, res) => {
	const { title, load, reps } = req.body;

	let emptyFields = [];

	if (!title) {
		emptyFields.push("title");
	}
	if (!load) {
		emptyFields.push("load");
	}
	if (!reps) {
		emptyFields.push("reps");
	}
	if (emptyFields.length > 0) {
		return res
			.status(400)
			.json({ error: "Please fill in all the fields", emptyFields });
	}

	// add doc to db
	try {
		const user_id = req.user._id;
		const workout = await Workout.create({ title, load, reps, user_id }); //add user_id to workout that belogs only to the user who is creating this workout
		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

//Get single workout by its id
const getWorkout = async (req, res) => {
	const { id } = req.params;

	//if id is valid
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such workout" });
	}
	//if there is an id
	const workout = await Workout.findById(id);
	if (!workout) {
		return res.status(404).json({ error: "No such workout" });
	}
	res.status(200).json(workout); // return the id with 200 status
};

//delete a workout

const deleteWorkout = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).json({ error: "No such workout" });
	}

	const workout = await Workout.findOneAndDelete({ _id: id });

	if (!workout) {
		return res.status(400).json({ error: "No such workout" });
	}
	// res.status(200).json("Workout has been deleted!");
	res.status(200).json(workout);
};

// update a workout
const updateWorkout = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).json({ error: "No such workout" });
	}

	const workout = await Workout.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!workout) {
		return res.status(400).json({ error: "No such workout" });
	}

	res.status(200).json(workout);
};

module.exports = {
	getWorkouts,
	createWorkout,
	getWorkout,
	deleteWorkout,
	updateWorkout,
};
