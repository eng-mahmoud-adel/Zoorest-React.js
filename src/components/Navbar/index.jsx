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
import {withTranslation} from 'react-i18next';
import ProfileAvatar from "../Avatars/ProfileAvatar";
import {Text14Medium, Text14Regular} from "../UI/Typography";

const Auth = withTranslation()(({authUser, showModal, t}) => {
    const showSignUpModal = () => {
        showModal(SignUpFormContainer);
    };

    const showSignInModal = () => {
        showModal(LoginForm);
    };

    return (
        <ul className="nav navbar-nav ml-auto w-100 justify-content-end auth">

            {!authUser.user ?
                <Fragment>
                    {/*Show Sign in and Sign up Button when there is no auth user*/}
                    <Nav.Item as="li" className="mr-3">
                        <Link className="nav-link" to="#" onClick={showSignInModal}>
                            <Text14Regular>
                                {t('login')}
                            </Text14Regular>
                        </Link>
                    </Nav.Item>

                    <Nav.Item as="li">
                        <Button color="btn-info"
                                onClick={showSignUpModal}>
                            <Text14Regular className="text-white">
                                Signup For Free
                            </Text14Regular>
                        </Button>
                    </Nav.Item>
                </Fragment> :

                <Fragment>
                    {/*There is authenticated User */}
                    <Text14Medium>{authUser.user.name}</Text14Medium>
                    <ProfileAvatar model={authUser.user} withLeftName={true} withName={false} withJoiningDate={false}/>

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
                                <Text14Regular>
                                    {t('home')}
                                </Text14Regular>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link" to="/question">
                                <Text14Regular>
                                    {t('questions')}
                                </Text14Regular>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link" to="/article">
                                <Text14Regular>
                                    {t('articles')}
                                </Text14Regular>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link find-doctor" to="/doctor">
                                <Text14Regular>
                                    {t('find_doc')}
                                </Text14Regular>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link" to="/post">
                                <Text14Regular>
                                    {t('posts')}
                                </Text14Regular>
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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Navbar));
