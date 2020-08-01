import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousal.css';

class Carousal extends Component {

    render() {
        return (
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                This is Carousel.
            </div>
        );
    }
}

export default Carousal;
