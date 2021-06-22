import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import "./Login.css";

const Login = () => {
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
    e.preventDefault();
    fetch("http://localhost:400/auth/sign_in", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.Stringify({
        email: email,
        password: password,
      }),
    });
  };

  console.log(firstName, lastName, email, password);

  console.log(handleLogin());
  return (
    <div className="login">
      <Header />
      <div className="login__container">
        <div className="login__line">-----------------</div>
        <h1 className="login__header">LOGIN</h1>
        <div className="login__line">-----------------</div>
        <br></br>
        <br></br>
        <br></br>
        <div className="login__form__container">
          <form>
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
                SIGN IN
              </button>
              <span className="form__link">
                <NavLink to="/login">
                  <i className="form__login">
                    or <em>Register</em>
                  </i>
                </NavLink>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="login__container__2">
        <p className="login__reset__password">RESET PASSWORD</p>
        <div className="login__form__container">
          <form>
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
            <div class="form__button">
              <button
                type="submit"
                class="btn-xs"
                value="Submit"
                onSubmit={handleLogin}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
