import { useReducer } from "react";
import { createContext } from "react";

export const WorkoutsContext = createContext(); // context name

//3. create Redcumer

export const workoutsReducer = (state, action) => {
	switch (action.type) {
		case "SET_WORKOUTS":
			return {
				workouts: action.payload,
			};
		case "CREATE_WORKOUT":
			return {
				workouts: [action.payload, ...state.workouts],
			};
		case "DELETE_WORKOUT":
			return {
				workouts: state.workouts.filter((w) => w._id !== action.payload._id),
			};
		default:
			return state;
	}
};

//1st context
export const WorkoutsContextProvider = ({ children }) => {
	// 	//2.Redcumer
	const [state, dispatch] = useReducer(workoutsReducer, {
		workouts: null,
	});

	return (
		<WorkoutsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</WorkoutsContext.Provider>
	);
};
