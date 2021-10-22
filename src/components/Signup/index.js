import React from "react";
import {
  Container,
  Form,
  FormBtnLink,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  TextLink,
} from "../Signup/SignupElement";

const index = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">dinna</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Join Us</FormH1>
              <FormLabel htmlFor="for">Fullname</FormLabel>
              <FormInput type="name" required />
              <FormLabel htmlFor="for">Username</FormLabel>
              <FormInput type="first name" required />
              <FormLabel htmlFor="for">Birthdate</FormLabel>
              <FormInput type="date" required />
              <FormLabel html="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required id="pswd1" />
              <FormLabel htmlFor="for">Confirm Password</FormLabel>
              <FormInput type="password" required id="pswd2" />
              <FormBtnLink to="/signin" type="submit">
                Sign Up
              </FormBtnLink>
              <TextLink to="/signin">Sign In</TextLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default index;
