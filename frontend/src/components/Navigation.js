import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="site_navigation">
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
				<div className="container-fluid ">
					<Link className="navbar-brand " to="/">
						WORKOUTS
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse justify-content-end fw-bold"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav ">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">
									HOME
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">
									WORKOUTS
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navigation;
