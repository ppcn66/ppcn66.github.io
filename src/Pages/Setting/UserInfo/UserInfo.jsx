import React from "react";
import "./UserInfo.css";

const UserInfo = () => {
  return (
    <div className="userinfo">
      <img
        src="src/assets/pic/pro.jpg"
        alt="User"
        className="user-avatar"
      />
      <div className="user-details">
        <p><strong>ชื่อผู้ใช้งาน:</strong> Username</p>
        <p><strong>แผนก:</strong> การเงิน</p>
      </div>
    </div>
  );
};

export default UserInfo;
