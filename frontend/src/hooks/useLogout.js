import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";

export const useLogout = () => {
	const { dispatch } = useAuthContext();
	const { dispatch: workoutDispatch } = useWorkoutsContext();
	const navigate = useNavigate();

	//1. create a logout function
	const logout = () => {
		//2. remove user from storage
		localStorage.removeItem("user");

		//3. dispatch logout action
		dispatch({ type: "LOGOUT" });
		// workoutDispatch({ type: "SET_WORKOUTS", payload: null }); //clear workouts context
		workoutDispatch({ type: "SET_WORKOUTS", payload: [] });

		//navigate("/login"); //redirect the user to login page afte logout
	};

	return { logout };
};
