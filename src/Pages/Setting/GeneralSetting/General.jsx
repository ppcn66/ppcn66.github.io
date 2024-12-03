import React from "react";
import "./General.css";

const General = () => {
  const settings = [
    "ภาษา",
    "ข้อมูลส่วนตัว",
    "โปรไฟล์",
    "ความปลอดภัย",
    "ที่จัดเก็บ",
  ];

  return (
    <div className="general-settings">
      <h2>การตั้งค่าทั่วไป</h2>
      <ul className="settings-list">
        {settings.map((setting, index) => (
          <li key={index} className="settings-item">
            {setting}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default General;
