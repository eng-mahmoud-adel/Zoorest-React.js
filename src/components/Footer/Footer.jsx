import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png';
import {Nav} from "react-bootstrap";
import BaseNavbar from "react-bootstrap/Navbar";

const Footer = (props) => {
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
                    <ul className="navbar-nav w-25 justify-content-md-end justify-content-between flex-row text-center social-links">
                        <li className= "nav-item">
                            <a className= "nav-link" href= "https://www.facebook.com/zoorestEG/" target= "_blank">
                                <i className="fa fa-facebook-official" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li className= "nav-item">
                            <a className= "nav-link" href= "https://www.instagram.com/zoorest/" target= "_blank">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li className= "nav-item">
                            <a className= "nav-link" href= "https://twitter.com/zoorest/" target= "_blank">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </BaseNavbar>
                <div className= "copy-right text-center">
                    All copyrights Reserved 2020. Zoorest&copy;
                </div>
            </div>
        </footer>
    );
};

export default Footer;