// import React, { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
import "./DashboardStyle.css";
// import About from "../pages/About";

import { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";
import WorkoutList from "../components/WorkoutList";

// const Dashboard = () => {
// 	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// 	const toggleSidebar = () => {
// 		setIsSidebarOpen(!isSidebarOpen);
// 	};
// 	return (
// 		<section className="dashboard">
// 			<div className="container">
// 				<div className="row">
// 					<div className="col-md-10">
// 						<div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
// 							<div className="sidebar-header">
// 								<button className="sidebar-toggle" onClick={toggleSidebar}>
// 									<i className="fa fa-bars"></i>
// 								</button>
// 							</div>
// 							<ul className="nav flex-column">
// 								<li className="nav-item">
// 									<Link className="nav-link" to="/">
// 										<i className="fa fa-home"></i> Home
// 									</Link>
// 								</li>
// 								<li className="nav-item">
// 									<Link className="nav-link" to="/about">
// 										<i className="fa fa-info-circle"></i> About
// 									</Link>
// 								</li>

// 								<li className="nav-item">
// 									<Link className="nav-link" to="#">
// 										<i className="fa fa-user-circle"></i> Profile
// 									</Link>
// 								</li>
// 								<li className="nav-item">
// 									<Link className="nav-link" to="/workouts">
// 										<i className="fa fa-pencil-square-o"></i> Workout
// 									</Link>
// 								</li>
// 							</ul>
// 						</div>
// 					</div>
// 					<div className="col-md-2">
// 						<About />
// 						<Outlet />
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Dashboard;

const Dashboard = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [contentComponent, setContentComponent] = useState(null);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const handleComponentChange = (component) => {
		setContentComponent(component);
	};

	return (
		<section className="dashboard">
			<div className="container-fluid">
				<div className="row">
					{/* Sidebar Column */}
					<div className={`col-lg-3 sidebar ${isSidebarOpen ? "open" : ""}`}>
						<div className="sidebar-header">
							<button className="sidebar-toggle" onClick={toggleSidebar}>
								<i className="fa fa-bars"></i>
							</button>
						</div>
						<ul className="nav flex-column">
							<li className="nav-item">
								<Link
									className="nav-link"
									to="/"
									onClick={() => handleComponentChange(<About />)}
								>
									<i className="fa fa-home"></i> Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="#"
									onClick={() => handleComponentChange(<About />)} // Replace About with your About component
								>
									<i className="fa fa-info-circle"></i> About
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="#"
									onClick={() => handleComponentChange(<Profile />)}
								>
									<i className="fa fa-user-circle"></i> Profile
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="#"
									onClick={() => handleComponentChange(<WorkoutList />)}
								>
									<i className="fa fa-pencil-square-o"></i> Add Workout
								</Link>
							</li>
						</ul>
					</div>

					{/* Content Column */}
					<div className="col-lg-9">
						{/* Display the selected component */}
						<div className="content">
							{contentComponent || <About />} {/* Default to Home component */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
