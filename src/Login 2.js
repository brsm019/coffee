import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Header from "./Header";
import "./Login.css";

// <Redirect to="/SignUp"
/* <Redirect
              to={{ pathname: "/signup", state: { from: props.location } }} */

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const postURL = `https://coffee-1ea81.web.app/auth/sign_in`; //Our previously set up route in the backend
    fetch(postURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        res.json().then((result, err) => {
          if (err) return err.message;
          console.log({ result });
          localStorage.setItem(
            "token",
            JSON.stringify({
              token: result.token,
            })
          );
          localStorage.setItem("auth", JSON.stringify({ auth: result.auth }));

          // history.push("/");
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Error logging in please try again");
      });
  };
  console.log(localStorage.getItem("auth"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("auth");
    localStorage.removeItem("login");
  };

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
          <form onSubmit={handleLogin}>
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
              <button type="submit" class="btn-xs" value="Submit">
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
          <button onClick={handleLogout}>Logout forTesting</button>
        </div>
      </div>
      {/* <div className="login__container__2">
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
      </div> */}
    </div>
  );
};

export default Login;
