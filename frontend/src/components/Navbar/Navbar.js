import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-nmg">
                <a className="navbar-brand px-5" href="/">LOGO</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ">
                        <Link to ="/" id="navLink">
                            <li className="nav-item mr-3 px-3">Home</li>
                        </Link>
                        <Link to="/events" id="navLink">
                                <li className="nav-item mx-3 px-3">Events</li>
                        </Link>
                        <Link to ="/resources" id="navLink">
                            <li className="nav-item mx-3 px-3">Resources</li>
                        </Link>
                        <Link to ="/members" id="navLink">
                            <li className="nav-item mx-3 px-3">Members</li>
                        </Link>
                        <Link to ="/gallery" id="navLink">
                            <li className="nav-item mx-3 px-3">Gallery</li>
                        </Link>
                    </ul>
                </div>
            </nav>



       );
    }
}

export default Navbar;
