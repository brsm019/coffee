import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../utils/validation";
import { useHistory } from "react-router-dom";
import { handleSignUp } from "../actions";

const SignUp = () => {
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="signup__wrapper">
        <div className="signup__container">
          <div className="signup__line">-----------------</div>
          <h1 className="signup__header">REGISTER</h1>
          <div className="signup__line">-----------------</div>
          <br></br>
          <br></br>
          <br></br>
          <div className="signup__form__container">
            <form
              onSubmit={handleSubmit((values, e) =>
                handleSignUp(
                  values,
                  e,
                  firstName,
                  lastName,
                  email,
                  password,
                  setMessage,
                  history
                )
              )}
            >
              <div className="form-group">
                <label for="first__name">First Name</label>
                <input
                  type="text"
                  {...register("firstName")}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  id="first__name"
                  name="firstName"
                  value={firstName}
                  onChange={handleNameChange}
                />
                <div className="invalid-feedback">
                  {errors.firstName?.message}
                </div>
              </div>

              <div className="form-group">
                <label for="last__name">Last Name</label>
                <input
                  type="text"
                  {...register("lastName")}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  id="last__name"
                  name="lastName"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
                <div className="invalid-feedback">
                  {errors.lastName?.message}
                </div>
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="text"
                  {...register("email")}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  {...register("password")}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              </div>
              <div className="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  {...register("confirmPassword")}
                  className={`form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                  id="confirmPassword"
                  name="confirmPassword"
                />
                <div className="invalid-feedback">
                  {errors.confirmPassword?.message}
                </div>
              </div>
              <div class="form__button">
                <button type="submit" class="btn-xs" value="Submit">
                  CREATE
                </button>
                <span className="form__link">
                  <NavLink to="/login">
                    <i className="form__login">
                      or <em>Login</em>
                    </i>
                  </NavLink>
                </span>
              </div>
              <p class="form__success__message">{message}</p>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
