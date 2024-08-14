import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./home.module.css";
import axios from "axios";
import useAuth from "./useAuth.jsx";
import Footer from "./footer.jsx";
const Home = () => {
  const navigate = useNavigate();
  useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    axios
      .get("http://localhost:8081/logout", { withCredentials: true })
      .then((res) => {
        if (res.data.Status === "success") {
          navigate("/login");
        } else {
          alert("error");
        }
      })
      .catch((err) => console.log(err));
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.nav}>
          <Link
            className={styles.q}
            style={{ textDecoration: "none" }}
            to="/home"
          >
            JEE-PREP
          </Link>
          <Link
            className={styles.p}
            style={{ textDecoration: "none" }}
            to="/references"
          >
            References
          </Link>
          <Link
            className={styles.p}
            style={{ textDecoration: "none" }}
            to="/colleges"
          >
            College
          </Link>
          <Link
            className={styles.p}
            style={{ textDecoration: "none" }}
            to="/exam"
          >
            Exam
          </Link>
          <Link
            className={styles.p}
            style={{ textDecoration: "none" }}
            to="/counselling"
          >
            Counselling
          </Link>

          <div className={styles.dropdown}>
            <button className={styles.dropdownButton} onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faUser} />{" "}
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            <div
              className={`${styles.dropdownMenu} ${
                dropdownOpen ? styles.show : ""
              }`}
            >
              <Link
                className={styles.dropdownItem}
                style={{ textDecoration: "none" }}
                to="/profile"
              >
                Profile
              </Link>
              <button className={styles.dropdownItem} onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.bodydiv1}>
          <h2 className={styles.get}>
            Start your preparation today with JEE-PREP
          </h2>
          <Link
            className={styles.b1}
            style={{ textDecoration: "none" }}
            to="/references"
          >
            Get references
          </Link>
        </div>
        <div className={styles.bodydiv2}>
          <h2 className={styles.get}>
            Know everything about IIT's & NIT's and other
          </h2>
          <Link
            className={styles.b2}
            style={{ textDecoration: "none" }}
            to="/colleges"
          >
            Get started
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
