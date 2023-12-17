import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext"; // to get the logged user information

const Profile = () => {
	const { user } = useAuthContext(); // to get the logged user information

	return (
		<div className="container mt-4">
			<div className="card" style={{ maxWidth: "400px" }}>
				<div className="card-header">
					<h2 className="card-title">User Profile</h2>
				</div>
				<div className="card-body">
					<div className="text-center">
						<img
							src="https://via.placeholder.com/150"
							alt="User Profile"
							className="rounded-circle mb-3"
							style={{ width: "150px", height: "150px" }}
						/>
					</div>
					<div className="cart-text">
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<b>First Name:&nbsp; </b>John
							</li>
							<li className="list-group-item">
								<b>Last Name:&nbsp; </b>Doe
							</li>
							<li className="list-group-item">
								<b>Email:&nbsp; </b>
								{user.email}
							</li>
						</ul>
					</div>

					<div className="card-footer text-muted">
						<button
							className="btn btn-outline-secondary d-block btn-lg"
							title="Edit"
						>
							<i className="fa fa-pencil-square-o"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
