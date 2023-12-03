import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
	const [title, setTitle] = useState("");
	const [load, setLoad] = useState("");
	const [reps, setReps] = useState("");
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);
	const { dispatch } = useWorkoutsContext(); // use this hook instead of using useState hook

	const handleSubmit = async (e) => {
		e.preventDefault();

		const workout = { title, load, reps };

		const response = await fetch("/api/workouts", {
			method: "POST",
			body: JSON.stringify(workout),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
			setEmptyFields(json.emptyFields);
		}
		if (response.ok) {
			setEmptyFields([]);
			setError(null);
			setTitle("");
			setLoad("");
			setReps("");

			//window.location.reload(); //reload after form is submitted
			//display the new workout action using dispatch in the context
			dispatch({ type: "CREATE_WORKOUT", payload: json });
			console.log("new workout added:", json);
		}
	};
	return (
		<div>
			<form className="create card p-4" onSubmit={handleSubmit}>
				<h3 className="mb-3">Add a New Workout</h3>
				<hr />

				<div className="mb-3">
					<label>Excersize Title:</label>
					<input
						type="text"
						className={`form-control form-control-lg ${
							emptyFields.includes("title") ? "border border-danger" : ""
						}`}
						placeholder="Enter title"
						name="title"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
				</div>

				<div className="mb-3">
					<label>Load (in kg):</label>
					<input
						type="number"
						name="load"
						value={load}
						placeholder="Enter load"
						className={`form-control form-control-lg ${
							emptyFields.includes("load") ? "border border-danger" : ""
						}`}
						onChange={(e) => setLoad(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					{" "}
					<label>Number of Reps:</label>
					<input
						type="number"
						name="reps"
						value={reps}
						className={`form-control form-control-lg ${
							emptyFields.includes("reps") ? "border border-danger" : ""
						}`}
						placeholder="Number of Reps"
						onChange={(e) => setReps(e.target.value)}
					/>
				</div>
				<button className="btn btn-success">Add Workout</button>
				<div className="mb-3 mt-3 text-center">
					{error && <h4 className="text-danger">{error}</h4>}
				</div>
			</form>
		</div>
	);
};

export default WorkoutForm;