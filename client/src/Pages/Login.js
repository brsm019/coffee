import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "./Login.css";
import { useStateValue } from "../GlobalState/StateProvider";

const Login = () => {
  const [state, dispatch] = useStateValue();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const postURL = "http://localhost:4000/auth/sign_in"; //Our previously set up route in the backend
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
          // console.log(result);
          localStorage.setItem(
            "token",
            JSON.stringify({
              token: result.token,
            })
          );
          localStorage.setItem("auth", JSON.stringify({ auth: result.auth }));
          localStorage.setItem(
            "name",
            JSON.stringify({ name: result.user.firstName })
          );

          setName(result.user.firstName);
          //Dispatch user's name into global state
          dispatch({
            type: "SET_USER",
            user: result.user.firstName,
          });

          history.push("/");
          history.go(0);
        });
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  };
  // console.log(localStorage.getItem("auth"));
  // console.log(localStorage.getItem("name"));
  // console.log({ name });
  // console.log({ state });

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
                className={`form-control ${error === true ? "is-invalid" : ""}`}
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <div className="invalid-feedback">
                {"Email or password is incorrect"}
              </div>
            </div>
            <div class="form__button">
              <button type="submit" class="btn-xs" value="Submit">
                SIGN IN
              </button>
              <span className="form__link">
                <NavLink to="/signup">
                  <i className="form__login">
                    or <em>Register</em>
                  </i>
                </NavLink>
              </span>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="bottom"></div> */}
      <Footer />
    </div>
  );
};

export default Login;
