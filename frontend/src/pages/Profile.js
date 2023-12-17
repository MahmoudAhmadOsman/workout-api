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
      <Card style={{ maxWidth: '400px' }}>
        <Card.Header>
          <h5 className="card-title">User Profile</h5>
        </Card.Header>
        <Card.Body>
          <div className="text-center">
            <img
              src={user.imageURL}
              alt="User Profile"
              className="rounded-circle mb-3"
              style={{ width: '150px', height: '150px' }}
            />
          </div>
          <Card.Text>
            <strong>First Name:</strong> {user.firstName}
          </Card.Text>
          <Card.Text>
            <strong>Last Name:</strong> {user.lastName}
          </Card.Text>
          <Card.Text>
            <strong>Email:</strong> {user.email}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
