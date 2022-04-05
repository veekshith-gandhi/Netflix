/** @format */

import {useState} from "react";
import "./login.scss";

const Login = () => {
    return (
        <div className="login">
            <div className="loginlogocontainer">
                <img src="https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=1" alt="" className="loginlogo"/>
            </div>
            <div className="formcontainer">
                <form className="form">
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Enter Email"/>
                    <input type="password" placeholder="Enter Password"/>
                    <button className="loginbtn">Sign In</button>
                    <span>
                        New to Netflix ?
                        <b>Sign up now</b>
                    </span>
                    <small>
                        this page is protected by google reCAPTCHA to ensure your not a bot{" "}
                        <b>learn more</b>
                    </small>
                </form>
            </div>
        </div>
    );
};

export default Login;
