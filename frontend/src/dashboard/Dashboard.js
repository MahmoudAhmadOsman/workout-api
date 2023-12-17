import { useState } from "react";
import { Link } from "react-router-dom";
import About from "../pages/About";
import Profile from "./Profile";
import WorkoutList from "../components/WorkoutList";
import "./DashboardStyle.css";

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
					<div className="col-md-2">
						<div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
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
										to="#/about"
										onClick={() => handleComponentChange(<About />)} // Replace About with your About component
									>
										<i className="fa fa-info-circle"></i> About
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link"
										to="#/profile"
										onClick={() => handleComponentChange(<Profile />)}
									>
										<i className="fa fa-user-circle"></i> Profile
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link"
										to="#/workouts"
										onClick={() => handleComponentChange(<WorkoutList />)}
									>
										<i className="fa fa-pencil-square-o"></i>Workout
									</Link>
								</li>
							</ul>
						</div>
					</div>

					{/* Content Column */}
					<div className="col-md-8">
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
