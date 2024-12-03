import React from "react";
import "./Setting.css";
import UserInfo from "./UserInfo/UserInfo";
import GeneralSettings from "./GeneralSetting/General"
import AccessControl from "./AccessControl/Access"



const Setting = () => {
  return (
    <div className="main-setting">
      <div className="settings-container">
        <h1 className="settings-title">การตั้งค่า</h1>
        <div className="settings-sections">
        <div className="userinfo"><UserInfo /> </div>
        <div className="general"> <GeneralSettings /> </div>
        <div className="access"><AccessControl /> </div>
          
        </div>
      </div>
    </div>
  );
};
export default Setting;
