import React from 'react'
import { Link } from 'react-router-dom';
import { signInUser, signOutUser } from '../api/auth';

export default function Navbar() {
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"
                        >Klay
                        </Link>
                    
                                <div className="collapse navbar-collapse"           id="navbarTogglerDemo02">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/about"
                                            >
                                                About
                                                </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" aria-current="page" to="/contact"
                                            >
                                                Contact
                                                </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" aria-current="page" to="/projects"
                                            >
                                                Projects
                                                </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" aria-current="page" to="/messages"
                                            >
                                                Messages
                                                </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" aria-current="page" to="/projectform"
                                            >
                                                Project form
                                                </Link>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                            onClick={signInUser}
                                            type="button"
                                            className="btn btn-danger border border-dark"
                                            >
                                                Log In
                                                </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                            onClick={signOutUser}
                                            type="button"
                                            className="btn btn-danger border border-dark"
                                            >
                                                Log Out
                                                </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                </div>
    )
}
