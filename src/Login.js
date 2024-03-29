import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import { auth } from "./firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    // some fancy firebase
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    // do some firebase stuff
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created a user with following email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://img.freepik.com/free-vector/online-shop-application-marketplace-vector-icon-web-store-market-online-shop-mobile-phone-app-button-buy-sale-digital-store-market-smart-shopping-delivery-technology_8071-6849.jpg?w=2000"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail </h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password </h5>
          <input
            type="password"
            value={password}
            onChange={(p) => setPassword(p.target.value)}
          />
          <button type="submit" onClick={signIn} className="login_signinButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to our terms & Conditions of Us. Please see
          our Privacy Policy, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login_registerButton">
          {" "}
          Create your Account{" "}
        </button>
      </div>
    </div>
  );
}

export default Login;
