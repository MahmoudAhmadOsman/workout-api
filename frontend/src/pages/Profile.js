import React from "react";

const Profile = () => {
 // Sample user data
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    // Replace the imageURL with the URL of the user's profile picture
    imageURL: 'https://via.placeholder.com/150', // Placeholder image URL
  };

  return (
    <div className="container mt-4">
      <div className="card" style={{ maxWidth: '400px' }}>
        <div className="card-header">
          <h5 className="card-title">User Profile</h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              src={user.imageURL}
              alt="User Profile"
              className="rounded-circle mb-3"
              style={{ width: '150px', height: '150px' }}
            />
          </div>
          <p className="card-text">
            <strong>First Name:</strong> {user.firstName}
          </p>
          <p className="card-text">
            <strong>Last Name:</strong> {user.lastName}
          </p>
          <p className="card-text">
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
