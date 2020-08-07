import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';
import landercard from './landercard.svg';
import iiitlogo from './IIITlogo.svg';

class LandingPage extends Component {

    render() {
        return (
          <div className="row landercard leaves my-0" id="parallax">
          <div class="circle-container">
          	<div class="outer-ring"></div>

          	<div class="outer-outer-ring"></div>

          	<div class="circle">
          		<div class="front">
              <img  src={landercard} className="img-fluid"  alt="Logo"></img>

          		</div>
          		<div class="back">
              <img  src={iiitlogo} className="img-fluid"  alt="Logo"></img>

          		</div>
          	</div>
          </div>
          </div>




        );
    }
}

export default LandingPage;
