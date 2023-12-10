import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navigation = () => {
	const { logout } = useLogout();

	const handleClick = () => {
		logout();
	};
	return (
		<div className="site_navigation">
			<nav className="navbar navbar-expand-sm justify-content-center navbar-light bg-light ">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
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
						className="collapse navbar-collapse fw-bold text-uppercase"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-5 ms-auto mb-lg-0">
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									onTouchEndCapture="/"
								>
									HOME
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/">
									WORKOUTS
								</Link>
							</li>
							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									MAHMOUD
								</Link>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<Link className="dropdown-item" onClick={handleClick}>
											Logout
										</Link>
									</li>
									{/* <li>
										<Link className="dropdown-item" to="#">
											Another
										</Link>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<Link className="dropdown-item" to="#">
											Something
										</Link>
									</li> */}
								</ul>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/signup">
									REGISTER
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
