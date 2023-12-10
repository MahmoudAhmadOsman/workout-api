import React, { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { dispatch } = useAuthContext();
	const navigate = useNavigate();

	const login = async (email, password) => {
		setIsLoading(true);
		setError(null);

		const response = await fetch(
			"https://mern-stack-api-5lyq.onrender.com/api/user/login",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			}
		);
		const json = await response.json();

		if (!response.ok) {
			setIsLoading(false);
			setError(json.error);
		}
		if (response.ok) {
			//1. save the user to local storage
			localStorage.setItem("user", JSON.stringify(json));

			//2. update the auth context
			dispatch({ type: "LOGIN", payload: json });

			//3. update loading state
			setIsLoading(false);
		}
	};

	return { login, isLoading, error };
};
