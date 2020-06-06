import React, {Fragment, useEffect} from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal";
import {connect} from "react-redux";
import {getAuthData} from "./store/actions/auth";
import {getSiteGlobalData} from "./store/actions/globals";
import {Helmet} from "react-helmet";
import NotyToaster from "./components/Noty";

const App = ({getUserData, getGlobalData, location}) => {

    console.log(location.pathname);
    useEffect(() => {
        getUserData();
        getGlobalData();
    }, [getUserData, getGlobalData])
    return (
        <Fragment>
            {/*set Default Meta tags here*/}
            <Helmet>
                <meta content="Zoorest" property="og:title"/>
                <meta content="زورست عالم الحيوانات الأليفة" name="description"/>
                <meta content="زورست عالم الحيوانات الأليفة" name="og:description"/>
                <meta content="en_GB" property="og:locale"/>
                <meta content="ar_AR" property="og:locale:alternate"/>
            </Helmet>


            {/*Navbar Should always  show in each and every page*/}
            <Navbar/>
            <NotyToaster/>

            <div style={{
                marginTop: (location.pathname !== "/questions" &&
                    location.pathname !== "/") ? "100px" : ""
            }}>
                {/*Any Non*/}
                <AppRouter/>
            </div>

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
    },
    getGlobalData: () => {
        dispatch(getSiteGlobalData());
    }
});

export default connect(null, mapDispatchToProps)(App);
