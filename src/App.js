import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Header from './components/header/Header';
import Home from './components/home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Header />} />
          {/* <Route exact path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;