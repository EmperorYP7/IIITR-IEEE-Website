import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';
import landercard from './landercard.svg';
import iiitlogo from './IIITlogo.svg';

class LandingPage extends Component {

    render() {
        return (
          <div className="row landercard leaves mb-0 mt-5" id="parallax">
          <div className="col-12 col-lg-5">
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
          <div className="col-12 col-lg-7">
            <div className="title text-white">
              <h1>IEEE IIIT Ranchi<br></br>
              Student Branch </h1>
            </div>

          </div>
          </div>




        );
    }
}

export default LandingPage;
