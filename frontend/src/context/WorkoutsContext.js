import { useReducer } from "react";
import { createContext } from "react";

export const WorkoutsContext = createContext(); // context name

//3. create or define Reducer

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

//1. create context
export const WorkoutsContextProvider = ({ children }) => {
	//2. Use useReducer hook and pass your defined reducer name
	const [state, dispatch] = useReducer(workoutsReducer, {
		// workouts: null,
		workouts: [],
	});

	return (
		<WorkoutsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</WorkoutsContext.Provider>
	);
};
