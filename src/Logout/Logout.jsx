import "./Logout.css";
import { useState } from "react";

const Logout = () => {
  return (
    <div className="overlay">
      <div className="box">
        <div className="pic">
          <img className="lg" src="src/assets/Logo/Logo.png" alt="" />
          <p>คุณแน่ใจใช่ไหมว่าจะออกจากระบบ?</p>
        </div>

        <div className="bbtn">
          <span className="btnn cancle">
            <a href="#/">ยกเลิก</a>
          </span>
          <span className="btnn enter">
            <a href="#/login">ออกจากระบบ</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logout;
