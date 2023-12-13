import { useNavigate } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext"; // to get the logged user information

const Navigation = () => {
	const { logout } = useLogout();
	const { user, firstName } = useAuthContext(); // to get the logged user information
	//  console.log("Nav user",user)
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
									to="/"
									className="nav-link active"
									aria-current="page"
									onTouchEndCapture="/"
								>
									HOME
								</Link>
							</li>

							{user && (
								<li className="nav-item">
									<Link className="nav-link" to="/workouts">
										WORKOUTS
									</Link>
								</li>
							)}

							<li className="nav-item dropdown">
								{user && (
									<>
										<Link
											className="nav-link dropdown-toggle"
											href="#"
											id="navbarDropdown"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											{user.email}
										</Link>
										<ul
											className="dropdown-menu"
											aria-labelledby="navbarDropdown"
										>
											<li>
												<Link className="dropdown-item" onClick={handleClick}>
													Logout
												</Link>
											</li>

											{/* {user && (
												<li className="nav-item">
													Name:
													<Link className="nav-link">{user.firstName}</Link>
												</li>
											)} */}
										</ul>
									</>
								)}
							</li>
							{!user && (
								<>
									<li className="nav-item">
										<Link className="nav-link" to="/signup">
											REGISTER
										</Link>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navigation;
