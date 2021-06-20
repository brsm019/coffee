import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import "./SignUp.css";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bod, setBod] = useState([]);

  const handleNameChange = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
  };
  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  console.log(firstName, lastName, email, password);

  const handleLogin = async (event) => {
    event.preventDefault();
    const postURL = "http://localhost:4000/api/test"; //Our previously set up route in the backend
    const result = await fetch(postURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // We should keep the fields consistent for managing this data later
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
    }).then((res) => {
      // Once posted, the user will be notified
      res.json();
      alert("You have been added to the system!");
    });
    console.log(result);
  };

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
          <form onSubmit={handleLogin}>
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
              <button type="submit" class="btn-xs" value="submit">
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
