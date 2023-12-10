import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signup, error, isLoading } = useSignup(); //signup, error, isLoading: are imported fron userSignup hook
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		//send the request to the backend by create custom hook called [useSignup]
		await signup(email, password);

		console.log("Email: ", email, "Password: ", password);
		// navigate("/login");
		// setEmail("");
		// setPassword("");
	};

	return (
		<section className="sign-up">
			<div className="container mt-3">
				<div className="row justify-content-center">
					<div className="col-md-4">
						<div className="bg-light shadow-lg p-3 p-md-5">
							<form className="signup" onSubmit={handleSubmit}>
								<h3 className="text-uppercase text-center text-success ">
									Register
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
										className="form-control form-control-lg fs-6"
										onChange={(e) => setPassword(e.target.value)}
										value={password}
									/>
								</div>

								<div className="d-grid gap-2 mt-3">
									<button
										type="submit"
										className="btn btn-outline-primary fw-bold btn-lg"
										disabled={isLoading}
									>
										RESIGER
									</button>
								</div>
							</form>
							<p className="text-muted mt-2">
								Already have an account? &nbsp;
								<Link className="text-primary" to="/login">
									 Sign In
								</Link>
							</p>
						</div>
						{error && <p className="text-danger text-center fs-4">{error}</p>}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Signup;
