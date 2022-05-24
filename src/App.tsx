import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AlgoCharts from './charts/AlgoCharts';
import Sample from './charts/Sample';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div>
        <Navbar />
          <div className="content">
            <Routes>

              <Route path="/" element={<AlgoCharts />} />
                
              <Route path="/test" element={<Sample />} />
                
            </Routes>
          </div>          
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
