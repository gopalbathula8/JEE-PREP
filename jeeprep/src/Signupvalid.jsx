function valid(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern =
    /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()_+-={}\[\]|\\:;'\",<.>/?]{8,}$/;

  if (values.name === "") {
    error.name = "Email should not be empty";
  } else {
    error.name = "";
  }

  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email didn't match";
  } else {
    error.email = "";
  }

  if (values.password1 === "") {
    error.password1 = "Password should not be empty";
  } else if (!password_pattern.test(values.password1)) {
    error.password1 = "Password didn't match";
  } else {
    error.password1 = "";
  }

  if (values.password2 === "") {
    error.password2 = "Password should not be empty";
  } else if (values.password1 !== values.password2) {
    error.password2 = "Password doesn't match with the password";
  } else {
    error.password2 = "";
  }

  if (values.pet === "") {
    error.pet = "Should not be empty";
  } else {
    error.pet = "";
  }

  if (values.color === "") {
    error.color = "Should not be empty";
  } else {
    error.color = "";
  }
  return error;
}

export default valid;
