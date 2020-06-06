import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import logo from '../../images/logo.png';
import {connect} from "react-redux";
import Button from "../Buttons/Button/Button";
import './jquery';
import {Nav} from "react-bootstrap";
import BaseNavbar from "react-bootstrap/Navbar";
import {showModal} from "../../store/actions/modal";
import LoginForm from "../Forms/Auth/LoginForm";
import SignUpFormContainer from "../Forms/Auth/Signup/SignUpFormContainer";
import {useTranslation} from 'react-i18next';
import {logoutUser} from '../../store/actions/auth';


const Auth = (({authUser, showModal, logoutUser}) => {

    const {t} = useTranslation();
    const showSignUpModal = () => {
        showModal(SignUpFormContainer);
    };

    const showSignInModal = () => {
        showModal(LoginForm);
    };

    const showDropdown = () => {
        document.getElementById(`user_${authUser.user.id}`).classList.toggle("show");

        // Close the dropdown if the user clicks outside of it
        // window.onclick = function (event) {
        //     if (!event.target.matches('.dropbtn')) {
        //         let dropdowns = document.getElementsByClassName("dropdown-content");
        //         for (let i = 0; i < dropdowns.length; i++) {
        //             let openDropdown = dropdowns[i];
        //             console.log(openDropdown)
        //             if (openDropdown.classList.contains('show')) {
        //                 openDropdown.classList.remove('show');
        //             }
        //         }
        //     }
        // }
    }

    return (
        <ul className="nav navbar-nav ml-auto w-100 justify-content-end auth">

            {!authUser.user ?
                <Fragment>
                    {/*Show Sign in and Sign up Button when there is no auth user*/}
                    <Nav.Item as="li" className="mr-3">
                        <Link className="nav-link" to="#" onClick={showSignInModal}>
                            <p className="label font-medium">
                                {t('login')}
                            </p>
                        </Link>
                    </Nav.Item>

                    <Nav.Item as="li">
                        <Button variant="info"
                                onClick={showSignUpModal}>
                            <p className="label font-medium text-white">
                                {t('sign_up')}
                            </p>
                        </Button>
                    </Nav.Item>
                </Fragment> :

                <Fragment>
                    {/*There is authenticated user */}
                    <span className="font-medium">{authUser.user.name}</span>
                    <div>
                        <img src={authUser.user.image} style={{width: "30px", borderRadius: "50%", cursor: "pointer"}}
                             onClick={showDropdown} alt="alt"/>
                    </div>

                    <div id={`user_${authUser.user.id}`} className="dropdown-content">
                        <Link to={`/user/${authUser.user.id}`}>{t('view_profile')}</Link>
                        <Link to={`/user/${authUser.user.id}/edit-profile`}>{t('edit_profile')}</Link>
                        <Link to="/" onClick={logoutUser}>{t('logout')}</Link>
                    </div>

                </Fragment>
            }

        </ul>
    );
});

const Navbar = (props) => {

    const {t} = useTranslation();

    return (
        <header>
            <BaseNavbar fixed="top" expand="md" bg="faded" className="justify-content-center">

                <BaseNavbar.Brand href="/" className={"d-flex w-50 mr-auto pl-5"}>
                    <img
                        src={logo}
                        width={150}
                        className="d-inline-block align-top"
                        alt="zoorest brand logo"
                    />
                </BaseNavbar.Brand>

                <BaseNavbar.Toggle aria-controls="collapsingNavbar"/>

                <BaseNavbar.Collapse className="w-100" id="collapsingNavbar">

                    <Nav as="ul" className="navbar-nav w-100 justify-content-between">
                        <Nav.Item as="li">

                            <Link className="nav-link" to="/">
                                <p className="label font-regular">
                                    {t('home')}
                                </p>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link" to="/questions">
                                <p className="label font-regular">
                                    {t('questions')}
                                </p>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link" to="/articles">
                                <p className="label font-regular">
                                    {t('articles')}
                                </p>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link find-doctor" to="/providers">
                                <p className="label font-regular">
                                    {t('find_doc')}
                                </p>
                            </Link>
                        </Nav.Item>
                        {/*<Nav.Item as="li">
                            <Link className="nav-link" to="/post">
                                <p className="label font-regular">
                                    {t('posts')}
                                </p>
                            </Link>
                        </Nav.Item>*/}
                    </Nav>

                    <Auth authUser={props.authUser} showModal={props.showModal} logoutUser={props.logoutUser}/>
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
        dispatch(logoutUser());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
