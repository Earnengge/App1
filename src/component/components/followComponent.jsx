import React, { useState, useEffect } from "react";
import "./FollowMeModal.css"; // Create a CSS file for styling
import { Link } from "react-router-dom";

function FollowMeModal() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [closeTimer, setCloseTimer] = useState(null);
  const [showFollowModal, setShowFollowModal] = useState(true); // State for modal

  // Check if the user has already followed
  const hasUserFollowed = localStorage.getItem("userFollowed") === "true";

  const handleFollowClick = () => {
          setIsFollowing(true);
    // If the user hasn't followed, proceed
    if (!hasUserFollowed) {
      // Set the loading state to true
      setIsFollowing(true);

      // Simulate an API call or any asynchronous operation (e.g., following on Twitter)
      setTimeout(() => {
        // You can also perform the actual "follow" operation with your API here

        // After the operation is complete, you can set the loading state back to false and close the modal
        setIsFollowing(true);

        // Set a flag in localStorage to indicate that the user has followed
        localStorage.setItem("userFollowed", "true");
      }, 1000); // Simulate a 2-second operation, you can adjust the duration
    } else {
      // User has already followed, close the modal
    }

    // Start a timer to automatically close the modal after 2 minutes
    const timer = setTimeout(() => {
      setIsFollowing(true);

      setShowFollowModal(false);
    }, 1000); // 2 minutes in milliseconds
    setCloseTimer(timer);
  };

  useEffect(() => {
    // Clear the timer when the component unmounts
    return () => {
      if (closeTimer) {
        clearTimeout(closeTimer);
      }
    };
  }, [closeTimer]);

  return (
    showFollowModal && (
      <div className="modal-overlay">
        <div className="modal-content" style={{ color: "white" }}>
          {isFollowing ? (
            <div>
              <p style={{ color: "black" }}>
                "Authenticating... Following EarnEngage on Twitter"
              </p>
              <div className="spinner">
                {/* Add your spinner component here */}
              </div>
            </div>
          ) : (
            <Link to="https://x.com/EarnEngageCoin?s=20" target="_blank">
              <button className="follow-button" onClick={handleFollowClick}>
                Follow EarnEngage on Twitter
              </button>
            </Link>
          )}
        </div>
      </div>
    )
  );
}

export default FollowMeModal;
