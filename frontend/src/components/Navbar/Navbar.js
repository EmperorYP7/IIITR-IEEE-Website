import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <Link to ="/">
                                <li className="nav-item mr-3">Home</li>
                            </Link>
                            <Link to="/events">
                                <li className="nav-item mx-3">Events</li>
                            </Link>
                            <Link to ="/resources">
                                <li className="nav-item mx-3">Resources</li>
                            </Link>
                            <Link to ="/members">
                                <li className="nav-item mx-3">Members</li>
                            </Link>
                            <Link to ="/gallery">
                                <li className="nav-item mx-3">Gallery</li>
                            </Link>
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
