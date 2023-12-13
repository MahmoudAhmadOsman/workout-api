import { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

import { useAuthContext } from "../hooks/useAuthContext"; //1. import the useAuthContext
import { BASE_URL } from "../service/SignUpService";
import Loading from "../utils/Loading";

const WorkoutList = () => {
	// const [workouts, setWorkouts] = useState([]);
	const { workouts, dispatch } = useWorkoutsContext(); // use this instead of useState hook
	const { user } = useAuthContext(); //1. get the logged in user to see the data
	// console.log("Home User: ", user);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch(BASE_URL + "/api/workouts", {
				headers: { Authorization: `Bearer ${user.token}` },
			});
			const json = await response.json();

			if (response.ok) {
				// setWorkouts(json);
				dispatch({ type: "SET_WORKOUTS", payload: json });
				setIsLoading(false);
			}
		};
		if (user) {
			fetchWorkouts(); // only show if there is user
		}
	}, [dispatch, user]);

	return (
		// <div className="home">
		// 	<div className="container mt-4">
		// 		<div className="row">
		// 			<div className="col-md-6">
		// 				{workouts && workouts.length > 0 ? (
		// 					workouts.map((workout) => (
		// 						<div
		// 							className="card shadow-lg p-3 m-1 bg-body rounded p-2 "
		// 							key={workout._id}
		// 						>
		// 							<div className="card-body">
		// 								<WorkoutDetails workout={workout} key={workout._id} />
		// 							</div>
		// 						</div>
		// 					))
		// 				) : (
		// 					<p className="alert alert-danger">No workouts found</p>
		// 				)}
		// 			</div>
		// 			<div className="col-md-6">
		// 				<WorkoutForm />
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		<div className="home">
			<div className="container mt-4">
				<div className="row">
					<div className="col-md-6">
						{isLoading ? ( // Show loading indicator if isLoading is true
							<p className="loading">{<Loading />}</p>
						) : workouts && workouts.length > 0 ? (
							workouts.map((workout) => (
								<div
									className="card shadow-lg p-3 m-1 bg-body rounded p-2 "
									key={workout._id}
								>
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

export default WorkoutList;
