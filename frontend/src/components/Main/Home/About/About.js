import React from 'react';

import './About.css';
// import logo from './ieee.jpg';
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
        <p className="lead"><span className="about text-center mb-4">Student Branch </span> An IEEE Student Branch provides opportunities to meet and learn from fellow IEEE Student and Graduate Student Members and engage with professional IEEE members locally. An active IEEE Student Branch can be one of the most positive elements of your academic career, offering programs, activities, and professional networking opportunities that build critical skills outside of the classroom. IEEE currently has Student Branches at thousands of universities and colleges in hundreds of countries throughout the world.
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
  <div className="col-12 col-md-4">
  <Card className="px-3 py-3 mt-5 text-center bg">
    {/* <Card.Img variant="top" src={logo} /> */}
    <span className="text-center"><i className="fas fa-puzzle-piece fa-5x icon-lightblue"></i></span>
    <Card.Body className="body">
      <Card.Title className="cart-title text-white bold"><span className="text-lg">WHAT</span> is IEEE ?</Card.Title>
      <Card.Text >
        Institute of Electrical and Electronics Engineers
        Institute of Electrical and Electronics Engineers
        Institute of Electrical and Electronics Engineers
        Institute of Electrical and Electronics Engineers
        </Card.Text>
    </Card.Body>
    {/* <Card.Footer className="bg-info">
    </Card.Footer> */}
  </Card>
  </div>
  <div className="col-12 col-md-4">
  <Card className="px-3 py-3 mt-5 text-center bg ">
    {/* <Card.Img variant="top" src={logo} /> */}
    <span className="text-center"><i className="fas fa-tasks fa-5x icon-lightblue"></i></span>
    <Card.Body className="body">
      <Card.Title className="cart-title text-white bold "><span className="text-lg">WHY</span> is IEEE ?</Card.Title>
      <Card.Text>
      Institute of Electrical and Electronics Engineers
        Institute of Electrical and Electronics Engineers
        Institute of Electrical and Electronics Engineers
        Institute of Electrical and Electronics Engineers
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
    </Card.Footer> */}
  </Card>
  </div>
  <div className="col-12 col-md-4">
  <Card className="px-3 py-3 mt-5 text-center bg">
    {/* <Card.Img variant="top" src={logo} /> */}
    <span className="text-center"><i className="fas fa-university fa-5x icon-lightblue"></i></span>
    <Card.Body className="body">
      <Card.Title className="cart-title text-white bold"><span className="text-lg">BENEFITS</span> of IEEESB </Card.Title>
      <Card.Text>
      Institute of Electrical and Electronics Engineers
        Institute of Electrical and Electronics Engineers
        Institute of Electrical and Electronics Engineers
        Institute of Electrical and Electronics Engineers
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