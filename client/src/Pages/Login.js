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

  const handleLogin = async (e) => {
    e.preventDefault();
    const postURL = "/auth/sign_in";
    try {
      const res = await fetch(postURL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      const { auth, token, user } = await res.json();
      localStorage.setItem("token", JSON.stringify({ token }));
      localStorage.setItem("auth", JSON.stringify({ auth }));
      localStorage.setItem("name", JSON.stringify({ name: user.firstName }));
      setName(user.firstName);
      dispatch({ type: "SET_USER", user: user.firstName });
      history.push("/");
    } catch (err) {
      setError(true);
      console.error(err);
    }
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
      <Footer />
    </div>
  );
};

export default Login;
