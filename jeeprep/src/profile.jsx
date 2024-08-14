import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./profile.module.css";
import Footer from "./footer.jsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch profile data from the API using Axios
    axios
      .get("http://localhost:8081/profile", { withCredentials: true })
      .then((response) => {
        if (response.data.Status === "success") {
          setProfile(response.data.profile); // Set the profile data
        } else {
          setError(response.data.message || "Failed to fetch profile"); // Set error message
        }
        setLoading(false); // End loading state
      })
      .catch((error) => {
        setError("Network error: " + error.message); // Handle network errors
        setLoading(false); // End loading state
      });
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) return <p>Loading...</p>; // Show loading message
  if (error) return <p>Error fetching profile: {error}</p>; // Show error message

  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>JEE-PREP</h1>
          </div>
          <div className={styles.home}>
            <Link to="/home">Home</Link>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.card}>
          <div className={styles.imagecontainer}>
            <div className={styles.profilePhoto}>
              <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
            </div>
          </div>

          <div className={styles.profileDetails}>
            <p>
              <strong>Name:</strong> {profile?.name || "N/A"}
            </p>
            <p>
              <strong>Email:</strong> {profile?.email || "N/A"}
            </p>
            <p>
              <strong>Pet name:</strong> {profile?.pet || "N/A"}
            </p>
            <p>
              <strong>Favourite color:</strong>{" "}
              <span className={styles.pending}>{profile?.color || "N/A"}</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
