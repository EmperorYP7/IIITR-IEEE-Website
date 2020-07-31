import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

class Navbar extends Component {
    
    state = { clicked : false }

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
                        <li className="nav-item active mr-3">
                            <a className="nav-link" href="https://">Home</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="https://">Events</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="https://">Resources</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="https://">Members</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="https://">Gallery</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;