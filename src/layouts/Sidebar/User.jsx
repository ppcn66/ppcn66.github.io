import React, { useState } from "react";
import "./User.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logout from "../../Logout/Logout";
const User = ( {setToken}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <div className="userFixed">
      <div className="user-container">
        <span className="profile-pic">
          <img src="src/assets/pic/pro.jpg" alt="profile" />
        </span>
        <div className="user-info">
          <span>Username</span>
          <span>Email</span>
        </div>
        {!isPopupOpen && (
          <span onClick={openPopup}>
            <i class="bi bi-chevron-down"></i>
          </span>
        )}
        {isPopupOpen && (
          <span onClick={closePopup}>
            <i class="bi bi-chevron-up"></i>
          </span>
        )}
      </div>
      {isPopupOpen && (
        <div className="Logout-container">
          <div className="Logout">
            
              <a href="#/logout">Logout</a>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
