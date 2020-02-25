import React from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Navbar/>
        <AppRouter/>
      </Router>
  );
}

export default App;
