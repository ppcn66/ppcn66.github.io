import React from "react";
import "./Access.css";

const Access = () => {
  const departments = [
    "แผนกไอที",
    "แผนกการเงิน",
    "แผนกทรัพยากรบุคคล",
    "แผนกวิจัยและพัฒนา",
    "แผนกการตลาด",
    "แผนกกฎหมาย",
  ];

  return (
    <div className="access-control">
      <h2>การกำหนดสิทธิ์การเข้าถึง</h2>
      <ul className="departments-list">
        {departments.map((department, index) => (
          <li key={index} className="department-item">
            {department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Access;
