import React from 'react';

import './About.css';
import logo from './ieee.jpg';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
class About extends React.Component {

render () {

return (



  <div class="jumbotron jumbotron-fluid bg-nmg">
    <div class="container" >

      <p class="lead"><span className="about"> " Student Branch </span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        </p>
    </div>


    <hr className="hori-line"/>

<div className=" bg-nmg">





<CardDeck className="deck-box">
  <Card>
    <Card.Img variant="top" src={logo} />
    <Card.Body className="body">
      <Card.Title className="cart-title">About IEEE</Card.Title>
      <Card.Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer className="bg-info">
    </Card.Footer> */}
  </Card>
  <Card>
    <Card.Img variant="top" src={logo} />
    <Card.Body className="body">
      <Card.Title className="cart-title">About IEEE</Card.Title>
      <Card.Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
    </Card.Footer> */}
  </Card>

</CardDeck>

</div>



</div>









);



}
}

export default About;
