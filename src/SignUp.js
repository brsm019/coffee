import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import "./SignUp.css";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  const handleLogin = (e) => {
    return [email, password];
  };

  console.log(firstName, lastName, email, password);

  console.log(handleLogin());

  return (
    <div className="signup">
      <Header />
      <div className="signup__container">
        <div className="signup__line">-----------------</div>
        <h1 className="signup__header">REGISTER</h1>
        <div className="signup__line">-----------------</div>
        <br></br>
        <br></br>
        <br></br>
        <div className="signup__form__container">
          <form>
            <div className="form-group">
              <label for="first__name">First Name</label>
              <input
                type="text"
                class="form-control"
                id="first__name"
                name="first name"
                value={firstName}
                onChange={handleNameChange}
              />
            </div>
            <div className="form-group">
              <label for="last__name">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="last__name"
                name="last name"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="text"
                class="form-control"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div class="form__button">
              <button
                type="submit"
                class="btn-xs"
                value="Submit"
                onSubmit={handleLogin}
              >
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
