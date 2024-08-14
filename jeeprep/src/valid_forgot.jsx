function valid(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email didn't match";
  } else {
    error.email = "";
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
