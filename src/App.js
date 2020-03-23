import React, {Fragment} from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Fragment>
            {/*Navbar Should always  show in each and every page*/}
            <Navbar/>

            {/*Any Non*/}
            <AppRouter/>

            {/*Todo general popups,alerts..(login,registration) that will overlay a screen should be placed here*/}

            {/*Footer Should always  show in each and every page*/}
            <Footer/>
        </Fragment>
    );
}

export default App;
