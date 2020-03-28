import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import logo from '../../images/logo.png';
import {connect} from "react-redux";
import Index from "../Buttons/Button/Button";
import Avatar from '../Avatars/Avatar';
import './jquery';
import {Nav} from "react-bootstrap";
import BaseNavbar from "react-bootstrap/Navbar";
import {showModal} from "../../store/actions/modal";
import LoginForm from "../Forms/LoginForm";
import SignUpForm from "../Forms/SignUpForm";

const Auth = ({authUser, showModal}) => {

    const showSignUpModal = () => {
        showModal(SignUpForm);
    };

    const showSignInModal = () => {
        showModal(LoginForm);
    };

    return (
        <ul className="nav navbar-nav ml-auto w-100 justify-content-end">

            {!authUser.user ?
                <Fragment>
                    {/*Show Sign in and Sign up Button when there is no auth user*/}
                    <Nav.Item as="li" className="mr-3">
                        <Link className="nav-link" to="#" onClick={showSignInModal}>Login</Link>
                    </Nav.Item>

                    <Nav.Item as="li">
                        <Index color="btn-info" text="Signup For Free"
                               onClick={showSignUpModal}/>
                    </Nav.Item>
                </Fragment> :

                <Fragment>
                    {/*There is authenticated User */}

                    {/*TODO: Add Avatar Image, name */}
                    <Avatar className="avatar-two" text="MA"/>
                </Fragment>
            }

        </ul>
    );
};

const Navbar = (props) => (
    <header>
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

                <Auth authUser={props.authUser} showModal={props.showModal}/>
            </BaseNavbar.Collapse>
        </BaseNavbar>
    </header>
);

const mapStateToProps = (state) => ({
    authUser: state.authUser,
});

const mapDispatchToProps = dispatch => ({
    showModal: (component) => {
        dispatch(showModal(component));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
