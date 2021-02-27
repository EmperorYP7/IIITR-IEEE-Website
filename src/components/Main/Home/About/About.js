import React from 'react';

import './About.css';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import NoticeBoard from '../Notice/NoticeBoard';
class About extends React.Component {

render () {

return (



  <div><hr className="full"></hr>
    <div className="row    my-0" >
      <div className="col-12 col-sm-8  pt-3 ">
        <div className="box boxup">
        <p className="lead"><span className="about text-center mb-4">IEEE- Student Branch </span> is the most constructive group of any institute that boosts the growth of the Students and thereby the Institution. It helps in keeping an unequivocal atmosphere around the campus and inspire the Students to indulge themselves in Technical as well as Research activities.
IEEESB of Indian Institute of Information Technology Ranchi was established in 2020 by 12 enthusiastic engineering undergrads. The branch was guided by Prof. Vishnu Priye (Director of IIIT Ranchi).
IEEESB comprise the Student Members who work under the guidance of a Faculty Advisor. The Branch is managed by a branch committee that beholds Chairman, Vice Chairman, Secretary and a Treasurer.
        </p>
        </div>
      </div>
      <div className="col-12 col-sm-4 pt-3">
        <NoticeBoard />
      </div>

  <hr></hr>
  </div>

<div className="row mt-0">
<CardDeck className="deck-box bg-darkblue">
  <div className="col-12 text-center text-white">
  <h3>About Us</h3><hr></hr>
  </div>
  <div className="col-sm-12 col-md-6 col-lg-4">
  <Card className="px-3 py-3 mt-5 text-center bg">
    {/* <Card.Img variant="top" src={logo} /> */}
    <span className="text-center"><i className="fas fa-puzzle-piece fa-5x icon-lightblue"></i></span>
    <Card.Body className="body">
      <Card.Title className="cart-title text-white bold"><span className="text-lg">What</span> is IEEE?</Card.Title>
      <Card.Text>
        IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer className="bg-info">
    </Card.Footer> */}
  </Card>
  </div>
  <div className="col-sm-12 col-md-6 col-lg-4">
  <Card className="px-3 py-3 mt-5 text-center bg ">
    {/* <Card.Img variant="top" src={logo} /> */}
    <span className="text-center"><i className="fas fa-tasks fa-5x icon-lightblue"></i></span>
    <Card.Body className="body">
      <Card.Title className="cart-title text-white bold "><span className="text-lg">Why</span> IEEE?</Card.Title>
      <Card.Text>
        IEEE houses an unrivaled network of professionals, experts, and advisors that can help shape your career.
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
    </Card.Footer> */}
  </Card>
  </div>
  <div className="col-sm-12 col-md-12 col-lg-4">
  <Card className="px-3 py-3 mt-5 text-center bg">
    {/* <Card.Img variant="top" src={logo} /> */}
    <span className="text-center"><i className="fas fa-university fa-5x icon-lightblue"></i></span>
    <Card.Body className="body">
      <Card.Title className="cart-title text-white bold"><span className="text-lg">BENEFITS</span> of IEEESB </Card.Title>
      <Card.Text>
      IEEE membership delivers access to the industry's most essential technical information and provides networking opportunities both locally and globally.
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer className="bg-info">
    </Card.Footer> */}
  </Card>
  </div>
</CardDeck>

</div>

</div>









);



}
}

export default About;
