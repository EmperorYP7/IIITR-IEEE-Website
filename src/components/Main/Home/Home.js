import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './LandingPage/LandingPage';
import About from './About/About';
import Carousal from './Carousal/Carousal';
import Society from './Society/Society';
import './Home.css';



class Home extends Component {

    state = { clicked : false }

    render() {
        return (
            <div className="container-fluid">
                <LandingPage />
                <About />
                <Society />
                <Carousal/>
            </div>
        );
    }
}

export default Home;
