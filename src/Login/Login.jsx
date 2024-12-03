import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { useRef } from "react";
import { verifyUser } from "../data/users";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img src="src/assets/logo/Logo.png" alt="Logo" />
        </div>
        <h2>Login</h2>
        <form>
          <input 
          type="text" 
          placeholder="Username" 
          id="username" 
          ref={userRef} />
          <div className="password-container">
            <input
              type="password"
              placeholder="Password"
              id="passeword"
              ref={passRef}
            />
            <span className="show-password">
              <i class="bi bi-eye-fill"></i>
            </span>
          </div>
          <button
            type="submit"
            className="login-button"
            onClick={() => {
              const user = userRef.current.value.trim();
              const pass = passRef.current.value.trim();
              userRef.current.value = "";
              passRef.current.value = "";
              const userInfo = verifyUser(user, pass);
              if (userInfo === null) {
                alert("รหัสหรือชื่อผู้ใช้ไม่ถูกต้อง");
                userRef.current.focus();
              } else {
                setToken(userInfo.token);
                setRole(userInfo.role);
              }
            }}
          >
            Login
          </button>

          <a href="#forgotpsw" className="forgot-password">
            Forget password?
          </a>

        </form>

        <div className="divider">
          <span>or</span>
        </div>
        <div className="social-login">
          <button className="line-button">
            <i class="bi bi-line"></i> &nbsp; LINE
          </button>
          <button className="passkey-button">
            <i class="bi bi-key-fill"></i> &nbsp; Pass key
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
