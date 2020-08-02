import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="/" ><strong>IEEE STUDENT SB RANCHI </strong> </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
                        <span className="navbar-toggler-icon"></span>
                    </button>

            <div className="collapse navbar-collapse" id="navbar1">
                     <ul className="navbar-nav ml-auto">
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
            </ul>
            </div>
            </div>
              </nav>

</div>



       );
    }
}

export default Navbar;
