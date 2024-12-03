import { useState, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login.jsx";
import Homer from "./Home/Home.jsx";
import Share from "./Pages/Share/Share.jsx";
import Admin from "./Pages/Admin/Admin";
import Bookmark from "./Pages/Bookmark/Bookmark.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Notification from "./Pages/Notification/Notification.jsx";
import Setting from "./Pages/Setting/Setting.jsx";
import Layout from "./layouts/Layout/Layout";
import Logout from "./Logout/Logout.jsx";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Forgot from "./Login/Forgot.jsx";
import ITDepartment from "./Beam/one/one.jsx";
import FinanceDepartment from "./Beam/two/two";
import HRDepartment from "./Beam/three/three";
import OneDepartment from "./Beam/four/four";
import TwoDepartment from "./Beam/five/five";
import ThreeDepartment from "./Beam/six/six";

function App() {
  const [token, setToken] = useState("x");
  const [role, setRole] = useState(" ");

  if (token === " ") {
    return <Login setToken={setToken} setRole={setRole} />;
  } else {
    return (
      <div className="App">
        <HashRouter>
          <Routes>
            <Route element={<Layout setToken />}>
              <Route path={"/"} element={<Homer />} />
              <Route path={"/forgotpsw"} element={<Forgot />} />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/logout"} element={<Logout />} />
              <Route path="/share" element={<Share />}></Route>
              <Route path={"/admin"} element={<Admin />} />
              <Route path="/bookmark" element={<Bookmark />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/setting" element={<Setting />} />
              {/* --------------------------------------------- */}

              <Route path="/one" element={<ITDepartment />} />
              <Route path="/two" element={<FinanceDepartment />} />
              <Route path="/three" element={<HRDepartment />} />
              <Route path="/four" element={<OneDepartment />} />
              <Route path="/five" element={<TwoDepartment />} />
              <Route path="/six" element={<ThreeDepartment />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
