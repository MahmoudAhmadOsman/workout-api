import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
	const { dispatch } = useAuthContext();
	const navigate = useNavigate();

	//1. create a logout function
	const logout = () => {
		//2. remove user from storage
		localStorage.removeItem("user");

		//3. dispatch logout action
		dispatch({ type: "LOGOUT" });

		//redirect the user to login page afte logout
		navigate("/login");
	};

	return { logout };
};
