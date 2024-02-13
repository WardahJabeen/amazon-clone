import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Header from './components/header/Header';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { useStateValue } from './StateProvider';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./firebase"


function App() {
  const [{ user }, dispatch] = useStateValue();

  // piece of code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      // if user is logged in
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

    return () => {
      // any cleanup
      unsubscribe(); // Unsubscribe on component unmount
    }
  }, [])

  console.log("user", user);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;