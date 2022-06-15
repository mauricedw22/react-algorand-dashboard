import React, { useContext, useState } from 'react';
import { Account } from './components/Account';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AlgoCharts from './charts/AlgoCharts';
import Sample from './charts/Sample';
import Signup from './components/SignUp.jsx';
import Login from './components/Login.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (

    <Router>
      <Account>
        <Navbar />
          <div className="content">
            <Routes>

              <Route path="/" element={<AlgoCharts />} />
                
              <Route path="/test" element={<Sample />} />

              <Route path="/signup" element={<Signup />} />

              <Route path="/login" element={<Login />} />
                
            </Routes>
          </div>          
        <Footer />
      </Account>
    </Router>
    
  );
}

export default App;
