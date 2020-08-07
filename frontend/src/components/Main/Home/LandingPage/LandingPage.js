import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';
import landercard from './landercard.svg';
class LandingPage extends Component {

    render() {
        return (
            <div >
                <div className="row landercard leaves my-0" id="parallax">
                    <div className="col-lg-6 col-md-12">
                        <img  src={landercard} className="img-fluid"  alt="Logo"></img>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <p className="about-content"><span className="about-head">"Branch Name </span>is the IEEE SB iiit ranchi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    </div>
                </div>
            </div>



        );
    }
}

export default LandingPage;
