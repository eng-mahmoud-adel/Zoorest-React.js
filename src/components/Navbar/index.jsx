import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import logo from '../../images/logo.png';
import {connect} from "react-redux";
import Button from "../Buttons/Button/Button";
//import './jquery';
import {Nav} from "react-bootstrap";
import BaseNavbar from "react-bootstrap/Navbar";
import {showModal} from "../../store/actions/modal";
import LoginForm from "../Forms/Auth/LoginForm";
import SignUpFormContainer from "../Forms/Auth/Signup/SignUpFormContainer";
import {withTranslation} from 'react-i18next';
import ProfileAvatar from "../Avatars/ProfileAvatar";
import {logoutUser} from '../../store/actions/auth';

const Auth = withTranslation()(({authUser, showModal, t, logoutUser}) => {
    const showSignUpModal = () => {
        showModal(SignUpFormContainer);
    };

    const showSignInModal = () => {
        showModal(LoginForm);
    };

    const showDropdown = () => {
        document.getElementById(`user_${authUser.user.id}`).classList.toggle("show");

        // Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                let dropdowns = document.getElementsByClassName("dropdown-content");
                for (let i = 0; i < dropdowns.length; i++) {
                    let openDropdown = dropdowns[i];
                    console.log(openDropdown)
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
        }

    return (
        <ul className="nav navbar-nav ml-auto w-100 justify-content-end auth">

            {!authUser.user ?
                <Fragment>
                    {/*Show Sign in and Sign up Button when there is no auth user*/}
                    <Nav.Item as="li" className="mr-3">
                        <Link className="nav-link" to="#" onClick={showSignInModal}>
                            <label className="font-medium">
                                {t('login')}
                            </label>
                        </Link>
                    </Nav.Item>

                    <Nav.Item as="li">
                        <Button color="btn-info"
                                onClick={showSignUpModal}>
                            <label className="font-medium text-white">
                                Signup For Free
                            </label>
                        </Button>
                    </Nav.Item>
                </Fragment> :

                <Fragment>
                    {/*There is authenticated User */}
                    <label className="font-medium">{authUser.user.name}</label>
                    <ProfileAvatar model={authUser.user} withLeftName={true} withName={false} withJoiningDate={false} onClick={showDropdown} />

                    <div id={`user_${authUser.user.id}`} className="dropdown-content">
                        <Link to={`/user/${authUser.user.id}`}>View Profile</Link>
                        <Link to="/"><span onClick={logoutUser}>Logout</span></Link>
                    </div>

                </Fragment>
            }

        </ul>
    );
});

const Navbar = (props) => {
    const {t} = props;

    return (
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

                    <Nav as="ul" className="navbar-nav w-100 justify-content-between">
                        <Nav.Item as="li">

                            <Link className="nav-link" to="/">
                                <label className="font-regular">
                                    {t('home')}
                                </label>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link" to="/question">
                                <label className="font-regular">
                                    {t('questions')}
                                </label>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link" to="/article">
                                <label className="font-regular">
                                    {t('articles')}
                                </label>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link find-doctor" to="/doctor">
                                <label className="font-regular">
                                    {t('find_doc')}
                                </label>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link" to="/post">
                                <label className="font-regular">
                                    {t('posts')}
                                </label>
                            </Link>
                        </Nav.Item>
                    </Nav>

                    <Auth authUser={props.authUser} showModal={props.showModal}/>
                </BaseNavbar.Collapse>
            </BaseNavbar>
        </header>
    )
};

const mapStateToProps = (state) => ({
    authUser: state.authUser,
});

const mapDispatchToProps = dispatch => ({
    showModal: (component) => {
        dispatch(showModal(component));
    },
    logoutUser: () => {
        dispatch(logoutUser);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Navbar));
