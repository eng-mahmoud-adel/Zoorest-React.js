import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => (
    <header className="row container">
        <Link to= "/">Home</Link>
        <Link to= "/about">About</Link>
        <Link to= "/article">Articles</Link>
        <Link to= "/post">Posts</Link>
        <Link to= "/question">Question</Link>
        <Link to= "/comment">Comment</Link>
        <Link to= "/advertisement">Advertisement</Link>
        <Link to= "/forms">Forms</Link>

    </header>
);

export default Navbar;
