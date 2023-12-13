import React, { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../service/SignUpService";

export const useSignup = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { dispatch } = useAuthContext();
	const navigate = useNavigate();

	const signup = async (firstName, email, password) => {
		setIsLoading(true);
		setError(null);

		const response = await fetch(BASE_URL + "/api/user/signup", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ firstName, email, password }),
		});
		const json = await response.json();

		if (!response.ok) {
			setIsLoading(false);
			setError(json.error);
		}
		if (response.ok) {
			//Below commented on 12/10/2023 and used navigate("/login") instead of login the user automatically
			//1. save the user to local storage
			localStorage.setItem("user", JSON.stringify(json));
			//2. update the auth context
			//dispatch({ type: "LOGIN", payload: json }); // don't sigin the user automatically

			//3. update loading state
			setIsLoading(false);

			setTimeout(() => {
				Swal.fire({
					icon: "success",
					position: "top-center",
					title: "Succcess",
					text: "Registered Successfully!",
					showConfirmButton: true,
					timer: 25000,
				});
				navigate("/login");
			});
		}
	};

	return { signup, isLoading, error };
};
