import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext"; // to get the logged user information

const Profile = () => {

const { user } = useAuthContext(); // to get the logged user information

 // Sample user data
  // const user = {
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   email: 'johndoe@example.com',
  //   imageURL: 'https://via.placeholder.com/150', // Placeholder image URL
  // };

  return (
    <div className="container mt-4">
      <div className="card" style={{ maxWidth: '400px' }}>
        <div className="card-header">
          <h5 className="card-title">User Profile</h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="User Profile"
              className="rounded-circle mb-3"
              style={{ width: '150px', height: '150px' }}
            />
          </div>
          <p className="card-text">
            <strong>First Name:</strong> John 
          </p>
          <p className="card-text">
            <strong>Last Name:</strong> Doe
          </p>
          <p className="card-text">
            <strong>Email:</strong> 
             {user && (
		<Link className="nav-link">{user.email}</Link>	
		)} 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
