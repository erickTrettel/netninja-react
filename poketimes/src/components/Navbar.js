import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

// NOTE: we can't push to the history of props by default because Navbar is not a Route (in App.js)
// which means that it doesn't receive the nested attributes of React Router

// But we can achieve that by using 'withRouter' (@see: HIGH ORDER COMPONENTS) 

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default withRouter(Navbar)