import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import User from "./User";
import Pro from "./User2";


const Sidebar = ( {setToken}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`Sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className={`logoContainer ${isCollapsed ? "collapsed" : ""}`}>
        <div>
          {!isCollapsed && (
            <span>
              <img
                src="src/assets/Logo/Logo1.png"
                alt="icon"
                className="full-logo "
              />
            </span>
          )}
          {isCollapsed && (
            <span>
              <img
                src="src/assets/Logo/Logo.png"
                alt="icon"
                className="small-logo "
              />
            </span>
          )}
        </div>

        <div>
          <button className="toggle-Button" onClick={toggleSidebar}>
            <i class="bi bi-list"></i>
          </button>
        </div>
      </div>
      <div className="burgerContainer"></div>
      <div className={`contentsContainer ${isCollapsed ? "collapsed" : ""}`}>
        <ul>
          <li>
            <NavLink to="/">
              <i class="bi bi-house-fill"> </i>{" "}
              {!isCollapsed && <span>หน้าหลัก</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/notification">
              <i class="bi bi-bell-fill"></i>{" "}
              {!isCollapsed && <span>การแจ้งเตือน</span>}
            </NavLink>
          </li>

          <li>
            <NavLink to="/share">
              <i class="bi bi-people-fill"></i>{" "}
              {!isCollapsed && <span>แชร์กับฉัน</span>}
            </NavLink>
          </li>

          <li>
            <a href="#/bookmark">
              <i class="bi bi-bookmark-fill"></i>{" "}
              {!isCollapsed && <span>บุ๊กมาร์ค</span>}
            </a>
          </li>
          <li>
            <a href="#/dashboard">
              <i class="bi bi-bar-chart-fill"></i>{" "}
              {!isCollapsed && <span>แดชบอร์ด</span>}
            </a>
          </li>
          <li>
            <a href="#/admin">
              <i class="bi bi-chat-right-fill"></i>{" "}
              {!isCollapsed && <span>ติดต่อแอดมิน</span>}
            </a>
          </li>
          <li>
            <a href="#/setting">
              <i class="bi bi-gear-fill"></i>{" "}
              {!isCollapsed && <span>ตั้งค่า</span>}
            </a>
          </li>
        </ul>
      </div>
      <div className="userContainer">
      {!isCollapsed && <span><User /></span>}
      {isCollapsed && <span><Pro /></span>}
      
      
      </div>
    </div>
  );
};

export default Sidebar;

// function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="App">
//       <button onClick={toggleSidebar} className="toggle-button">
//         ☰
//       </button>

//       <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
//         <div className="logo">
//           <img src="/logo.png" alt="Logo" />
//           <h2>metthier</h2>
//           <p>rise above ordinary</p>
//         </div>
//         <ul className="menu">
//           <li>
//             <FaHome className="icon" />
//             <span>หน้าหลัก</span>
//           </li>
//           <li>
//             <FaBell className="icon" />
//             <span>การแจ้งเตือน</span>
//           </li>
//           <li>
//             <FaUserFriends className="icon" />
//             <span>แชร์กับฉัน</span>
//           </li>
//           <li>
//             <FaBookmark className="icon" />
//             <span>บันทึก</span>
//           </li>
//           <li>
//             <FaChartLine className="icon" />
//             <span>สถิติ</span>
//           </li>
//           <li>
//             <FaEnvelope className="icon" />
//             <span>ติดต่อแอดมิน</span>
//           </li>
//           <li>
//             <FaCog className="icon" />
//             <span>ตั้งค่า</span>
//           </li>
//         </ul>
//         <div className="user-info">
//           <span className="profile-pic"> </span>
//           <div>
//             <p>username</p>
//             <p>email</p>
//           </div>
//         </div>
//       </div>

//       <div className="content">
//         <h1>Welcome to the main content area</h1>
//         <p>This is where your main content will be displayed.</p>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
