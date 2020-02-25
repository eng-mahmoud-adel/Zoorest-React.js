import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => (
    <header className="row">
        <div className="col-9 d-flex align-items-center">
            <a href="https://www.facebook.com/zoorestEG/" target="_blank" className="header-social-icons">
                <i className="fa fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com/zoorest" target="_blank" className="header-social-icons">
                <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/zoorest" target="_blank" className="header-social-icons">
                <i className="fa fa-instagram"></i>
            </a>
            <a href="#" target="_blank" className="header-social-icons">
                <i className="fa fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/company/zoorest" target="_blank" className="header-social-icons">
                <i className="fa fa-linkedin"></i>
            </a>
            <h4 id="big-screen-contacts" className="ml-auto text-white">01026661794 - 01032880938</h4>
        </div>
        <div className="col-3" style={{padding: "0"}}>
            <div className="col-8 offset-4 blue-header d-flex align-items-center justify-content-center ">تواصل معانا
            </div>
        </div>

        <div id="small-screen-contacts" className="col-12 d-none text-white">01026661794 - 01032880938</div>
    </header>
);

export default Navbar;
