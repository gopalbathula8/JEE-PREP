function valid(values) {
  let error = {};
  const password_pattern =
    /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()_+-={}\[\]|\\:;'\",<.>/?]{8,}$/;

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
    error.password2 = "Password didn't match";
  } else {
    error.password2 = "";
  }
  return error;
}

export default valid;
