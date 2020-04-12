import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png';
import {Nav} from "react-bootstrap";
import BaseNavbar from "react-bootstrap/Navbar";
import {FacebookIcon, InstagramIcon, TwitterIcon} from "../Icons";

const Footer = (props) => {
    return (
        <footer className= "footer">
            <div className= "container">
                <BaseNavbar expand="md" bg="faded" className="justify-content-center">
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
                                <Link className="nav-link find-doctor" to="/doctor">Find a doctor</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className="nav-link conditions" to="#">Terms &amp; Conditions</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className="nav-link policy" to="#">Privacy Policy</Link>
                            </Nav.Item>
                        </Nav>
                        <ul className="navbar-nav w-25 justify-content-end social-links">
                            <li className= "nav-item">
                                <a className="nav-link" href="https://www.facebook.com/zoorestEG/"
                                   rel="noopener noreferrer" target="_blank">
                                    <FacebookIcon/>
                                </a>
                            </li>
                            <li className= "nav-item">
                                <a className="nav-link" href="https://www.instagram.com/zoorest/"
                                   rel="noopener noreferrer" target="_blank">
                                    <InstagramIcon/>

                                </a>
                            </li>
                            <li className= "nav-item">
                                <a className="nav-link" href="https://twitter.com/zoorest/" rel="noopener noreferrer"
                                   target="_blank">
                                    <TwitterIcon/>

                                </a>
                            </li>
                        </ul>
                    </BaseNavbar.Collapse>
                </BaseNavbar>
                <div className= "copy-right text-center">
                    All copyrights Reserved 2020. Zoorest&copy;
                </div>
            </div>
        </footer>
    );
};

export default Footer;
