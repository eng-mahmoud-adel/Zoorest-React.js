import React from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom";

// for date picking
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';



function App() {
  return (
    <Router>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Navbar/>
        <AppRouter />
      </MuiPickersUtilsProvider>
    </Router>
  );
}

export default App;
