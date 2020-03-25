import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';

import logo from '../../images/logo.png';
import {connect} from "react-redux";
import Index from "../Buttons/Button/Button";
import Avatar from '../Avatars/Avatar';
import './jquery';
import {SignUpFormModal} from "../Forms/SignUpForm";
import {LoginFormModal} from "../Forms/LoginForm";

const Auth = props => {
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleSignUpModalClose = () => setShowSignUpModal(false);
    const handleSignUpModalShow = () => setShowSignUpModal(true);

    const handleLoginModalClose = () => setShowLoginModal(false);
    const handleLoginModalShow = () => setShowLoginModal(true);

    const handelSignUpClicked = () => {
        //hide active login modal
        handleLoginModalClose();

        //show sign-up modal
        handleSignUpModalShow();
    };

    const handelLoginClicked = () => {
        //hide active sign-up modal
        handleSignUpModalClose();

        //show login modal
        handleLoginModalShow();

    };
    return (
        <ul className="nav navbar-nav ml-auto w-100 justify-content-end">

            {props.authUser === null ?
                <Fragment>
                    {/*Show Sign in and Sign up Button when there is no auth user*/}
                    <li className="nav-item mr-3">
                        <Link className="nav-link" to="#" onClick={handleLoginModalShow}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Index color="btn-info" text="Signup For Free"
                               onClick={handleSignUpModalShow}/>
                    </li>
                </Fragment> :

                <Fragment>
                    {/*There is authenticated User */}

                    {/*TODO: Add Avatar Image, name */}
                    <Avatar className="avatar-two" text="MA"/>
                </Fragment>
            }

            <LoginFormModal show={showLoginModal} onHide={handleLoginModalClose} onSignupClicked={handelSignUpClicked}/>
            <SignUpFormModal show={showSignUpModal} onHide={handleSignUpModalClose}
                             onLoginClicked={handelLoginClicked}/>
        </ul>
    );
};

const Navbar = (props) => (
    <header>
        <nav className="navbar fixed-top navbar-light navbar-expand-md bg-faded justify-content-center">
            <Link to="/" className="navbar-brand d-flex w-50 mr-auto">
                <img src={logo} width={100} alt="logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#collapsingNavbar3">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">

                <ul className="navbar-nav w-100 justify-content-center">
                    <li className="nav-item mr-2">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link" to="/question">Questions</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link" to="/article">Articles</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Find a doctor</Link>
                    </li>
                    <li className="nav-item ml-2">
                        <Link className="nav-link" to="/post">Adoptions</Link>
                    </li>
                </ul>

                <Auth authUser={props.authUser}/>
            </div>
        </nav>
    </header>
);

const mapStateToProps = (state) => ({
    authUser: state.authUser,
});

export default connect(mapStateToProps)(Navbar);
