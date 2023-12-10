import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
	const { dispatch } = useAuthContext();

	//1. create a logout function
	const logout = () => {
		//2. remove user from storage
		localStorage.removeItem("user");

		//3. dispatch logout action
		dispatch({ type: "LOGOUT" });
	};

	return { logout };
};
