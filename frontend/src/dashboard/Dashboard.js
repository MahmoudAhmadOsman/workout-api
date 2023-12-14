import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DashboardStyle.css";

const Dashboard = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};
	return (
		<section className="dashboard">
			<div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
				<div className="sidebar-header">
					<button className="sidebar-toggle" onClick={toggleSidebar}>
						<i className="fa fa-bars"></i>
					</button>
				</div>
				<ul className="nav flex-column">
					<li className="nav-item">
						<Link className="nav-link" to="#">
							<i className="fa fa-home"></i> Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="#">
							<i className="fa fa-info-circle"></i> About
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="#">
							<i className="fa fa-user-circle"></i> Profile
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/workouts">
							<i className="fa fa-pencil-square-o"></i> Add Workout
						</Link>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Dashboard;
