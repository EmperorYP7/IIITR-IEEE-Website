import React from 'react';
import './Carousal.css';
import Mountain from './images/mountain.jpg';
import Laptop from './images/laptop.jpg';
import Circle from './images/circle.jpg';
import Carousel from 'react-bootstrap/Carousel';

class Carousal extends React.Component {

    render() {
        return (
          <div className="container-fluid bg-nmg">
            <Carousel className="image">
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={Mountain}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
                className="d-block w-100"
                src={Laptop}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
                className="d-block w-100"
                src={Circle}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        );
    }
}

export default Carousal;
