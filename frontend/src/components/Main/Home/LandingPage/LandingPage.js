import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';
import landercard from './landercard.svg';
import iiitlogo from './IIITlogo.svg';

class LandingPage extends Component {

    render() {
        return (
          <div className="row  leaves mb-0 mt-0" id="parallax">
          <div className=" col-lg-6 anime">
          <div className="circle-container">
          	<div className="outer-ring"></div>

          	<div className="outer-outer-ring"></div>

          	<div className="circle">
          		<div className="front ">
              <img  src={landercard} className="img-fluid front-logo"  alt="Logo"></img>

          		</div>
          		<div className="back ">
              <img  src={iiitlogo} className="img-fluid back-logo"  alt="Logo"></img>

          		</div>
          	</div>
          </div>
          </div>
          <div className=" col-lg-6">
            <div className="title ">
            <h1 className="heading">IEEE IIIT Ranchi
            Student Branch </h1>
            </div>

          </div>
          </div>




        );
    }
}

export default LandingPage;
