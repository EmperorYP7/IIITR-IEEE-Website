import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="/" ><strong>IEEE STUDENT SB RANCHI </strong> </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
                        <span class="navbar-toggler-icon"></span>
                    </button>

            <div class="collapse navbar-collapse" id="navbar1">
                     <ul class="navbar-nav ml-auto">
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
