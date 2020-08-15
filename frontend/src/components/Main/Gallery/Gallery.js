import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css';
import Pandey from './images/pandey.jpeg';
import Pandey1 from './images/eeve.jpg';
import Pandey2 from './images/pikachu.png';
import Pandey3 from './images/vaporeon.png';


class Gallery extends Component {

    render() {
        return (<div>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center album-header">
                            <h2>Album1</h2>
                            <hr></hr>
                        </div>
                    </div>
                    </div>
                    <div id = "scroller">
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey} alt="Yash pandey" id = "image"/>
                        </div>

                    </div>


                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center album-header">
                            <h2>Album2</h2>
                            <hr></hr>
                        </div>
                    </div>
                    </div>
                    <div id = "scroller">
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey1} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey2} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey3} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey3} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey2} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey2} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey1} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey1} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey1} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey2} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey3} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey3} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey2} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey1} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey} alt="Yash pandey" id = "image"/>
                        </div>

                    </div>

                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center album-header">
                            <h2>Album3</h2>
                            <hr></hr>
                        </div>
                    </div>
                    </div>
                    <div id = "scroller">
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey1} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey2} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey3} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey1} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey2} alt="Yash pandey" id = "image"/>
                        </div>
                        <div className = "slide">
                            <img className="card-img-top" src={Pandey3} alt="Yash pandey" id = "image"/>
                        </div>

                    </div>
            </div>
        );
    }
}

export default Gallery;
