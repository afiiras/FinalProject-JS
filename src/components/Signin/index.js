import React, { useState } from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormBtnLink,
  Text,
  TextLink,
} from "./SigninElement";

import validation from "./validator";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
  };
  return (
    <>
      <Container className="container">
        <FormWrap>
          <Icon to="/">dinna</Icon>
          <FormContent>
            <Form action="#">
              <FormH1 className="title">Sign in to your account</FormH1>
              {errors.email && (
                <p
                  style={{
                    color: "lightgreen",
                    fontSize: "10px",
                  }}
                  className="errors"
                >
                  {errors.email}
                </p>
              )}
              <FormLabel className="label" htmlFor="for">
                Email
              </FormLabel>
              <FormInput
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.password && (
                <p
                  style={{
                    color: "lightgreen",
                    fontSize: "10px",
                  }}
                  className="errors"
                >
                  {errors.password}
                </p>
              )}
              <FormLabel className="label" htmlFor="for">
                Password
              </FormLabel>
              <FormInput
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <FormBtnLink
                onClick={handleFormSubmit}
                to="/signup"
                type="submit"
              >
                Continue
              </FormBtnLink>
              <Text>Forgot password</Text>
              <TextLink to="/signup">Sign Up</TextLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
