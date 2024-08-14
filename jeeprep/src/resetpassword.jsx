import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate
import styles from "./resetpassword.module.css";
import valid from "./valid_reset";
import axios from "axios";

function Resetpassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;
  const [values, setValues] = useState({
    password1: "",
    password2: "",
  });

  const [error, setError] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = valid(values);
    setError(validationErrors);
    if (!error.password2) {
      axios
        .post("http://localhost:8081/resetpassword", {
          email: email,
          newPassword: values.password2,
        })
        .then((res) => {
          if (res.data === "Password updated successfully") {
            navigate("/"); // Navigate to login page
          } else {
            alert("Error updating password");
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
                <label htmlFor="password1">Reset Password</label>
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
                <label htmlFor="password2">Re-enter the Reset-Password</label>
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

              <button
                type="submit"
                className={`btn btn-success w-100 ${styles.button}`}
                style={{ backgroundColor: "blueviolet" }}
              >
                Submit
              </button>
              <hr />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resetpassword;
