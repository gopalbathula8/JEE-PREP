import React, { useState } from "react";
import styles from "./login.module.css"; // Import CSS module
import { Link, useNavigate } from "react-router-dom";
import valid from "./Loginvalid"; // Assuming Loginvalid is the correct file name
import axios from "axios";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = valid(values);
    setError(validationErrors);
    if (!error.name && !error.password2) {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "success") {
            navigate("/home");
          } else {
            alert("incorrect password/email");
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
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
        <div
          className={`d-flex justify-content-center align-items-center ${styles.right}`}
        >
          <div className={`bg-white p-3 rounded w-100 ${styles.boxShadow}`}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  onChange={handleChange}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  className={`form-control ${styles.input}`}
                  value={values.email}
                />
                {error.email && (
                  <span className="text-danger">{error.email}</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  className={`form-control ${styles.input}`}
                  value={values.password}
                />
                {error.password && (
                  <span className="text-danger">{error.password}</span>
                )}
              </div>
              <button
                type="submit"
                className={`btn btn-success w-100 ${styles.button}`}
                style={{ backgroundColor: "blueviolet" }}
              >
                Log in
              </button>
              <Link to="/forgotpassword">Forgotten password?</Link>
              <hr />
              <Link
                to="/signup"
                className={`btn btn-default border w-100 ${styles.button}`}
              >
                Create Account
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
