import { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () => {
	// const [workouts, setWorkouts] = useState(null);
	const { workouts, dispatch } = useWorkoutsContext(); // use this instead of useState hook

	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch("https://mern-stack-api-5lyq.onrender.com/api/workouts");
			const json = await response.json();

			if (response.ok) {
				// setWorkouts(json);
				dispatch({ type: "SET_WORKOUTS", payload: json });
			}
		};

		fetchWorkouts();
	}, []);

	return (
		<div className="home">
			<div className="container mt-4">
				<h2 className="text-success">Workout Details</h2>
				<hr />
				<div className="row">
					<div className="col-md-6">
						{workouts && workouts.length > 0 ? (
							workouts.map((workout) => (
								<div className="card shadow-lg p-3 m-1 bg-body rounded p-2 " key={workout._id}>
									<div className="card-body">
										<WorkoutDetails workout={workout} key={workout._id} />
									</div>
								</div>
							))
						) : (
							<p className="alert alert-danger">No workouts found</p>
						)}
					</div>
					<div className="col-md-6">
						<WorkoutForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
