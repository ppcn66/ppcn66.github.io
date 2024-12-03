import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ITDepartment from './one/one'; 
import FinanceDepartment from './two/two'; 
import HRDepartment from './three/three'; 
import OneDepartment from './four/four';
import TwoDepartment from './five/five';
import ThreeDepartment from './six/six';
import Home from './Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/one" element={<ITDepartment />} />
      <Route path="/two" element={<FinanceDepartment />} />
      <Route path="/three" element={<HRDepartment />} />
      <Route path="/four" element={<OneDepartment />} />
      <Route path="/five" element={<TwoDepartment />} />
      <Route path="/six" element={<ThreeDepartment />} />
    </Routes>
  </Router>
);

export default App;
