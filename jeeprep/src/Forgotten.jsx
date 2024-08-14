import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Forgotten.module.css";
import valid from "./valid_forgot";
import axios from "axios";

function Forgotten() {
  const [values, setValues] = useState({
    email: "",
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
    if (!error.email && !error.pet && !error.color) {
      axios
        .post("http://localhost:8081/forgotpassword", values)
        .then((res) => {
          if (res.data === "success") {
            navigate("/resetpassword", { state: { email: values.email } });
          } else {
            alert("Details doesn't match");
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
                  placeholder="Enter your email"
                  className={`form-control ${styles.input}`}
                  value={values.email}
                />
                {error.email && (
                  <span className="text-danger">{error.email}</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="pet">Pet name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="pet"
                  name="pet"
                  placeholder="Enter your pet name"
                  className={`form-control ${styles.input}`}
                  value={values.pet}
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
                  placeholder="Enter your favourite color"
                  className={`form-control ${styles.input}`}
                  value={values.color}
                />
                {error.color && (
                  <span className="text-danger">{error.color}</span>
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
              <Link
                to="/login"
                className={`btn btn-default border w-100 ${styles.button}`}
              >
                Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgotten;
