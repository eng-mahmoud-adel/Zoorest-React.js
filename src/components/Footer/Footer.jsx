import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png';
import {Nav} from "react-bootstrap";
import BaseNavbar from "react-bootstrap/Navbar";
import {FacebookIcon, InstagramIcon, TwitterIcon} from "../Icons";
import {withTranslation} from 'react-i18next';
import {connect} from "react-redux";

const Footer = withTranslation()(({t}) => {
    return (
        <footer className= "footer pb-5">
            <div className= "container">
                <BaseNavbar expand="md" bg="faded" className="justify-content-center">
                    <BaseNavbar.Brand href="/" className={"d-flex w-50 mr-auto mx-auto justify-content-center"}>
                        <img
                            src={logo}
                            width={100}
                            className="d-inline-block align-top"
                            alt="zoorest brand logo"
                        />
                    </BaseNavbar.Brand>
                    <Nav as="ul" className="navbar-nav w-100 justify-content-center text-center">
                        <Nav.Item as="li">
                            <Link className="nav-link" to="/">{t('home')}</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link" to="/question">{t('questions')}</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link" to="/articles">{t('articles')}</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link find-doctor" to="/providers">{t('find_doc')}</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link conditions"
                                  to="/terms-and-conditions">{t('terms_conditions')}</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link policy" to="/privacy-policy">{t('privacy_policy')}</Link>
                        </Nav.Item>
                    </Nav>
                    <ul className="navbar-nav w-25 justify-content-md-end justify-content-between flex-row text-center social-links">
                        <li className= "nav-item">
                                <a className="nav-link" href="https://www.facebook.com/zoorestEG/"
                                   rel="noopener noreferrer" target="_blank">
                                    <FacebookIcon color= "black"/>
                            </a>
                        </li>
                        <li className= "nav-item">
                                <a className="nav-link" href="https://www.instagram.com/zoorest/"
                                   rel="noopener noreferrer" target="_blank">
                                    <InstagramIcon color= "black"/>

                            </a>
                        </li>
                        <li className= "nav-item">
                                <a className="nav-link" href="https://twitter.com/zoorest/" rel="noopener noreferrer"
                                   target="_blank">
                                    <TwitterIcon color= "black"/>

                            </a>
                        </li>
                    </ul>
                </BaseNavbar>
                <div className= "copy-right text-center">
                    {t('copy_right')}
                </div>
            </div>
        </footer>
    );
});

export default connect(null)(withTranslation()(Footer));
