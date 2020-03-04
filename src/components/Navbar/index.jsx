import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => (
    <header className="row container">
        <Link to= "/">Home</Link>
        <Link to= "/about">About</Link>
    </header>
);

export default Navbar;
