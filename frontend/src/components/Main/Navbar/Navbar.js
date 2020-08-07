import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
    const [active, setActive] = useState('Home');
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-nmg py-3" id="scrollup">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ">
                        <Link to ="/" id="navLink">
                            <li className={(active==='Home')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} onClick={() => setActive('Home')} >Home</li>
                        </Link>
                        
                        <Link to="/events" id="navLink">
                                <li className={(active==='Events')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} onClick={() => setActive('Events')}>Events</li>
                        </Link>
                       
                        <Link to ="/resources" id="navLink">
                            <li className={(active==='Resources')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} onClick={() => setActive('Resources')}>Resources</li>
                        </Link>
                       
                        <Link to ="/members" id="navLink">
                            <li className={(active==='Members')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} onClick={() => setActive('Members')}>Members</li>
                        </Link>
                        
                        <Link to ="/gallery" id="navLink">
                            <li className={(active==='Gallery')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} onClick={() => setActive('Gallery')}>Gallery</li>
                        </Link>
                    </ul>
                </div>
            </nav>
       );
}

export default Navbar;
