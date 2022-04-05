/** @format */

import { useState } from "react";
import "./register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isTrue, setIstrue] = useState(false);

  const handleRegistration = () => {
    setIstrue(true);
    console.log(email);
    console.log(password);
  };
  return (
    <div className="register">
      <div className="registerlogocontainer">
        <img
          src="https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=1"
          alt=""
          className="registerlogo"
        />
        <button className="loginbtn">Sign In</button>
      </div>
      <div className="registercontent">
        <h1>Ultimate Movies, Tv Shows, and more</h1>
        <h2>Watch anywhere, cancel anytime</h2>
        <p>
          Ready to watch? Enter your Email to create or restart your Membership
        </p>
        <div className="inputbox">
          {!isTrue ? (
            <>
              <input
                type="email"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleRegistration} className="registerbtn">
                Get Started
              </button>
            </>
          ) : (
            <>
              <input
                type="password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleRegistration} className="registerbtn">
                START
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;