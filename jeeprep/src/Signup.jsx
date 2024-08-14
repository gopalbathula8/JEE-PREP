import styles from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import valid from "./Signupvalid";
import axios from "axios";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "", // Ensure this matches your backend
    pet: "",
    color: "",
  });

  const [error, setError] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = valid(values);
    setError(validationErrors);
    if (
      !validationErrors.name &&
      !validationErrors.email &&
      !validationErrors.password2 &&
      !validationErrors.pet &&
      !validationErrors.color
    ) {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => {
          if (err.response) {
            window.alert(err.response.data); // Display the error in an alert box
          } else {
            console.log(err);
          }
        });
    }
  };

  return (
    <>
      <div className={styles.top}></div>
      <div className={styles.main}>
        <div className={styles.left}>
          <h1>JEE-PREP</h1>
          <br />
          <h3>It's never late to start...</h3>
        </div>
        <div className={`d-flex justify-content-center ${styles.right}`}>
          <div className={`bg-white p-3 rounded w-100 ${styles.boxShadow}`}>
            <form onSubmit={handleSubmit} className={styles.gridForm}>
              {/* Other input fields */}
              <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className={`form-control ${styles.input}`}
                />
                {error.name && (
                  <span className="text-danger">{error.name}</span>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  onChange={handleChange}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  className={`form-control ${styles.input}`}
                />
                {error.email && (
                  <span className="text-danger">{error.email}</span>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password1">Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  id="password1"
                  name="password1"
                  placeholder="Enter Password"
                  className={`form-control ${styles.input}`}
                />
                {error.password1 && (
                  <span className="text-danger">{error.password1}</span>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password2">Re-enter Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  id="password2"
                  name="password2"
                  placeholder="Re-enter Password"
                  className={`form-control ${styles.input}`}
                />
                {error.password2 && (
                  <span className="text-danger">{error.password2}</span>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="pet">Your pet name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="pet"
                  name="pet"
                  placeholder="What's your pet name?"
                  className={`form-control ${styles.input}`}
                />
                {error.pet && <span className="text-danger">{error.pet}</span>}
              </div>

              <div className="mb-3">
                <label htmlFor="color">Favourite color</label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="color"
                  name="color"
                  placeholder="Favourite color"
                  className={`form-control ${styles.input}`}
                />
                {error.color && (
                  <span className="text-danger">{error.color}</span>
                )}
              </div>

              <div className="button-group d-grid gap-2">
                <button
                  type="submit"
                  className={`btn btn-success ${styles.button}`}
                  style={{ backgroundColor: "blueviolet" }}
                >
                  Create Account
                </button>
              </div>
              <div className="button-group d-grid gap-2">
                <Link
                  to="/login"
                  className={`btn btn-default border ${styles.button}`}
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
