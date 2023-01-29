import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "./Login.css";
import { useStateValue } from "../GlobalState/StateProvider";
import { handleLogin } from "../actions";

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
          <form
            onSubmit={(e) =>
              handleLogin(
                e,
                email,
                password,
                setName,
                dispatch,
                history,
                setError
              )
            }
          >
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
