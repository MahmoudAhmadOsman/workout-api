const mongoose = require("mongoose");
const Workout = require("../models/workoutModel");

//get all workouts

const getWorkouts = async (req, res) => {
	try {
		const workouts = await Workout.find({}).sort({ createdAt: -1 });
		res.status(200).json(workouts);
	} catch (error) {
		next(error);
	}
};

//get new workout
const createWorkout = async (req, res) => {
	const { title, load, reps } = req.body;

	//check error

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

	try {
		const workout = await Workout.create({ title, load, reps });
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
