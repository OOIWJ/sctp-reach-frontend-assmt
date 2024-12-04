import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import './index.css'

function Navbar() {
    const [isNavbarShowing, setNavbarShowing] = useState(false);
    // returns the current URL
    const [location] = useLocation();

    useEffect(() => {
        const syncNavbarState = () => {
            setNavbarShowing(window.innerWidth >= 992);
        };

        syncNavbarState();
        window.addEventListener('resize', syncNavbarState);
        return () => window.removeEventListener('resize', syncNavbarState);
    }, []);

    const toggleNavbar = () => {
        setNavbarShowing(!isNavbarShowing);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand"
                    href="#"
                    style={{ color: 'purple', fontSize: 'xx-large' }}
                >
                    <img
                        src="images/JEN logo.PNG"
                        style={{ width: '100px' }}
                        className="d-inline-block align-text-middle mb-1"
                        alt="Logo"
                    />
                    <b>My Little World</b>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavbarShowing ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="hlight nav-item">
                            <Link href="/" className={`nav-link ${location === '/' ? 'active' : ''}`}>
                                Home
                            </Link>
                        </li>
                        <li className="hlight nav-item">
                            <Link href="/books" className={`nav-link ${location === '/books' ? 'active' : ''}`}>
                                Books
                            </Link>
                            {/* <a className="nav-link" href="#">Products</a> */}
                        </li>
                        <li className="hlight nav-item">
                            <Link href="/cart" className={`nav-link ${location === '/cart' ? 'active' : ''}`}>
                                Cart
                            </Link>
                        </li>
                        <li className="hlight nav-item">
                            <Link href="/register" className={`nav-link ${location === '/register' ? 'active' : ''}`}>
                                Register
                            </Link>
                            {/* <a className="nav-link" href="#">Register</a> */}
                        </li>
                        <li className="hlight nav-item">
                            <Link href="/login" className={`nav-link ${location === '/login' ? 'active' : ''}`}>
                                Login
                            </Link>
                        </li>
                        <li className="hlight nav-item">
                            <Link href="/about" className={`nav-link ${location === '/about' ? 'active' : ''}`}>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;