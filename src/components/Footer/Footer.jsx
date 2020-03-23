import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png';

const Footer = (props) => {
    return (
        <footer className= "footer">
            <div className= "container">
                <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
                    <Link to="/" className="navbar-brand d-flex w-25 mr-auto">
                        <img src={logo} width={100} alt="logo"/>
                    </Link>
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
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="#">Find a doctor</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="#">Terms &amp; Conditions</Link>
                            </li>
                            <li className="nav-item ml-2">
                                <Link className="nav-link" to="#">Privacy Policy</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav w-25 justify-content-end social-links">
                            <li className= "nav-item">
                                <Link className= "nav-link" to= "https://www.facebook.com/zoorestEG/">
                                    <i class="fa fa-facebook-official" aria-hidden="true"></i>
                                </Link>
                            </li>
                            <li className= "nav-item">
                                <Link className= "nav-link" to= "https://www.instagram.com/zoorest/">
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                </Link>
                            </li>
                            <li className= "nav-item">
                                <Link className= "nav-link" to= "https://twitter.com/zoorest/">
                                    <i class="fa fa-twitter" aria-hidden="true"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className= "copy-right text-center">
                    All copyrights Reserved 2020. Zoorest&copy;
                </div>
            </div>
        </footer>
    );
};

export default Footer;
