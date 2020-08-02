import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';
import Cover from './cover1.png';
class LandingPage extends Component {

    render() {
        return (
            <div>
            <img src={Cover} class="img-fluid" alt="cover-img" />



            </div>


        );
    }
}

export default LandingPage;
