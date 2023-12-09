import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log("Email: ", email, "Password: ", password);
	};

	return (
		<section className="sign-up">
			<div className="container mt-3">
				<div className="row justify-content-center">
					<div className="col-md-4">
						<div className="bg-light shadow-lg p-3 p-md-5">
							<form className="signup" onSubmit={handleSubmit}>
								<h3 className="text-uppercase text-center text-success ">
									Sign Up
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

								<button
									type="submit"
									className="btn btn-outline-primary fw-bold btn-lg"
								>
									Sign up
								</button>
							</form>
							<p className="text-muted mt-2">
								Already have an account?
								<Link className="text-primary" to="/login">
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

export default Signup;
