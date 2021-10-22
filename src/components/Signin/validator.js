const validation = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "email is required !";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.password) {
    errors.password = "password is required !";
  } else if (values.password.length < 6) {
    errors.password = "Password must be more than 6 characters";
  }

  return errors;
};

export default validation;
