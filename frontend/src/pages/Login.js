import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, error, isLoading } = useLogin();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await login(email, password); //logout the user

		// console.log("Email: ", email, "Password: ", password);
		navigate("/");
	};

	return (
		<section className="sign-up">
			<div className="container mt-3">
				<div className="row justify-content-center">
					<div className="col-md-4">
						<div className="bg-light shadow-lg p-3 p-md-5">
							{error && (
								<p className="text-danger text-center fs-4 border border-danger p-2">
									{error}
								</p>
							)}
							<form className="signup" onSubmit={handleSubmit}>
								<h3 className="text-uppercase text-center text-success ">
									Login
								</h3>
								<hr />
								<div className="form-group mb-3">
									<label className="form-label" htmlFor="email">
										Email address
									</label>
									<input
										type="email"
										id="firstName"
										name="firstName"
										placeholder="Email"
										className="form-control form-control-lg fs-6"
										onChange={(e) => setEmail(e.target.value)}
										value={email}
									/>
								</div>
								<div className="form-group mb-3">
									<label className="form-label" htmlFor="password">
										Password
									</label>
									<input
										type="password"
										id="firstName"
										name="firstName"
										placeholder="Password"
										className="form-control form-control-lg fs-6 MB-3"
										onChange={(e) => setPassword(e.target.value)}
										value={password}
									/>
								</div>
								<div className="d-grid gap-2 MT-3">
									<button
										type="submit"
										className="btn btn-outline-primary fw-bold btn-lg"
										disabled={isLoading}
									>
										LOGIN
									</button>
								</div>
							</form>
							<p className="text-muted mt-2">
								Don't have an account?{" "}
								<Link className="text-primary" to="/signup">
									Sign In
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;