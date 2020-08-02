import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';
// import Cover from './cover1.png';
class LandingPage extends Component {

    render() {
        return (
            <div>
<div className="row">

<div className="col-lg-6 col-md-12">
  <svg width="500" height="500">
   <circle cx="250" cy="250" r="200" stroke="#1EBAD6" stroke-width="2" fill="white" />
     Sorry, your browser does not support inline SVG.
   <text fill="#000000" font-size="30" font-family="Roboto"
     x="220" y="210">IEEE
  </text>
   <text fill="#000000" font-size="30" font-family="Roboto"
     x="150" y="250"> Student Branch
  </text>
  <text fill="#1EBAD6" font-size="20" font-family="Roboto"
     x="190" y="290"> IIIT RANCHI
  </text>
 </svg>
</div>

<div className="col-lg-6 col-smd-12">
<p className="intro"><span className="about"> " Student Branch </span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  </p></div>

</div>

  </div>


        );
    }
}

export default LandingPage;
