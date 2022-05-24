import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
          <Routes>
            <Route>

            </Route>
          </Routes>
        <Footer></Footer>
      </div>
    </Router>
    
  );
}

export default App;
