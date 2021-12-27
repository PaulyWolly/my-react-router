/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const loggedIn = false;

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <a className="navbar-brand" href="/">React-Router</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className='nav-link link active' to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link link active' to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link link active' to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="login-logout-links ml-auto">
                        <button className="link btn-sm btn-primary" href="#"><span className="sign-up iconify" data-icon="mdi:account"></span>&nbsp;Sign Up</button>&nbsp;
                        { (loggedIn) ? <button className="link btn-sm btn-primary" href="#"><span className="loggedState iconify" data-icon="mdi:logout-variant"></span>&nbsp;Logout</button> : <button className="link btn-sm btn-primary" href="#"><span className="loggedState iconify" data-icon="mdi:login-variant"></span>&nbsp;Login</button> }
                    </div>
                </div>
            </nav>

        </div>
    )
}
