import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { formatDistanceToNow } from "date-fns";

const WorkoutDetails = ({ workout }) => {
	const { dispatch } = useWorkoutsContext(); // use this hook instead of using useState hook
	const { user } = useAuthContext(); // get the logged in user

	const handleClick = async () => {
		if (!user) {
			return;
		}

		const response = await fetch("/api/workouts/" + workout._id, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		});

		const json = await response.json();

		if (response.ok) {
			dispatch({ type: "DELETE_WORKOUT", payload: json });
		} else {
			alert("Unable to delete this record!");
		}
	};
	return (
		<section className="container">
			<div className="row">
				<div className="workout-details">
					<h2>{workout.title}</h2>
					<p>
						<strong>Load (kg): </strong>
						{workout.load}
					</p>
					<p>
						<strong>Number of reps: </strong>
						{workout.reps}
					</p>

					<p>
						{formatDistanceToNow(new Date(workout.createdAt), {
							addSuffix: true,
						})}
					</p>

					<button onClick={handleClick} className="btn btn-outline-danger ">
						Delete
					</button>
					<button className="btn btn-outline-success  ms-2">Edit</button>
				</div>
			</div>
		</section>
	);
};

export default WorkoutDetails;
