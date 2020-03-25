import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';

import logo from '../../images/logo.png';
import {connect} from "react-redux";
import Index from "../Buttons/Button/Button";
import Avatar from '../Avatars/Avatar';
import './jquery';
import {SignUpFormModal} from "../Forms/SignUpForm";
import {LoginFormModal} from "../Forms/LoginForm";
import {Nav} from "react-bootstrap";
import BaseNavbar from "react-bootstrap/Navbar";

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
                    <Nav.Item as="li" className="mr-3">
                        <Link className="nav-link" to="#" onClick={handleLoginModalShow}>Login</Link>
                    </Nav.Item>

                    <Nav.Item as="li">
                        <Index color="btn-info" text="Signup For Free"
                               onClick={handleSignUpModalShow}/>
                    </Nav.Item>
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
        {/*className="navbar fixed-top navbar-light navbar-expand-md bg-faded justify-content-center"*/}
        <BaseNavbar fixed="top" expand="md" bg="faded" className="justify-content-center">

            <BaseNavbar.Brand href="/" className={"d-flex w-50 mr-auto"}>
                <img
                    src={logo}
                    width={100}
                    className="d-inline-block align-top"
                    alt="zoorest brand logo"
                />
            </BaseNavbar.Brand>

            <BaseNavbar.Toggle aria-controls="collapsingNavbar"/>

            <BaseNavbar.Collapse className="w-100" id="collapsingNavbar">

                <Nav as="ul" className="navbar-nav w-100 justify-content-center">
                    <Nav.Item as="li">
                        <Link className="nav-link" to="/">Home</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link className="nav-link" to="/question">Questions</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link className="nav-link" to="/article">Articles</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link className="nav-link" to="#">Find a doctor</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link className="nav-link" to="/post">Adoptions</Link>
                    </Nav.Item>
                </Nav>

                <Auth authUser={props.authUser}/>
            </BaseNavbar.Collapse>
        </BaseNavbar>
    </header>
);

const mapStateToProps = (state) => ({
    authUser: state.authUser,
});

export default connect(mapStateToProps)(Navbar);
