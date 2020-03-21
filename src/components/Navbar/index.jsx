import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import logo from '../../images/logo.png';
import {connect} from "react-redux";
import BigButton from "../Buttons/BigButtons/BigButton";

const Auth = props => {
    return (
        <ul className="nav navbar-nav ml-auto w-100 justify-content-end">

            {props.authUser !== null ?
                <Fragment>
                    {/*Show Sign in and Sign up Buttons when there is no auth user*/}
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Login</Link>
                    </li>
                    <li className="nav-item">
                        <BigButton color="btn-info" to="#" text="Signup For Free"/>
                    </li>
                </Fragment> :

                <Fragment>
                    {/*There is authenticated User */}

                    {/*TODO: Add Avatar Image, name */}
                    User Data
                </Fragment>
            }


        </ul>
    );
};


const Navbar = (props) => (
    <header>
        <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
            <Link to="/" className="navbar-brand d-flex w-50 mr-auto">
                <img src={logo} width={100} alt="logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#collapsingNavbar3">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">

                <ul className="navbar-nav w-100 justify-content-center">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/question">Questions</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/article">Articles</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Find a doctor</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/post">Adoptions</Link>
                    </li>
                </ul>

                <Auth authUser={props.authUser}/>
            </div>
        </nav>

    </header>
);

const mapStateToProps = (state) => ({
    authUser: state.authUser,
});

export default connect(mapStateToProps)(Navbar);
