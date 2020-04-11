import React, {Fragment, useEffect} from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal";
import {connect} from "react-redux";
import {getAuthData} from "./store/actions/auth";

const App = (props) => {
    const {getUserData} = props
    useEffect(() => {
        getUserData();
    }, [getUserData])
    return (
        <Fragment>
            {/*Navbar Should always  show in each and every page*/}
            <Navbar/>

            {/*Any Non*/}
            <AppRouter/>

            {/*general popups,alerts..(login,registration) that will overlay a screen should be placed here*/}
            <Modal/>
            {/*Footer Should always  show in each and every page*/}
            <Footer/>
        </Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    getUserData: () => {
        dispatch(getAuthData());
    }
});

export default connect(null, mapDispatchToProps)(App);
