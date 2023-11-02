import React from "react";
import './profile.css';
import { useAuthContext } from "../../context/authContext";

function Profile() {
  const { user } = useAuthContext();

  // If the user is not logged in, display an error message
  if (!user) {
    return (
      <div className="error-message">
        Please log in to view your profile.
      </div>
    );
  }

  // If the user is logged in, display their profile
  return (
    <div className="profile-for-web3">
      <div className="profile-avater" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <img className="img-responsive" loading="lazy" src={user?.photoURL} />
        <div className="profile-name">
          <h2>{user?.displayName}</h2>
        </div>
      </div>
      
      <div className="user-stats">
        <div className="user-stat">
          <h3>Points</h3>
          <p>{user.points}</p>
        </div>
        <div className="user-stat">
          <h3>Retweets</h3>
          <p>{user.retweets}</p>
        </div>
        <div className="user-stat">
          <h3>Replies</h3>
          <p>{user.replies}</p>
        </div>
      </div>
   
    </div>
  );
}

export default Profile;
