import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Members.css';
import Pandey from './images/pandey.jpeg';

class Members extends Component {

    render() {
        return (
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 text-center mt-5">
                    <h2>Member Type 1</h2>
                    <hr></hr>
                </div>
                <div className="col-9 col-md-6 col-lg-5">
                   <div className="card ">
<<<<<<< HEAD

=======
                       
>>>>>>> 71fa8847f3957d4627e5a0202649613f6542b348
                       <img className="card-img-top" src= {Pandey} alt="Yash pandey"></img>
                       <div className="img-overlay col-12 hide">
                       <a className=" btn text-white" href="https://"><i className="fab fa-linkedin fa-2x"></i></a>
                        <a className=" btn text-white" href="https://"><i className="fab fa-github-square fa-2x"></i></a>
                        <a className=" btn text-white" href="https://"><i className="fas fa-envelope fa-2x"></i></a>
                        <a className=" btn text-white" href="https://"><i className="fab fa-instagram fa-2x"></i></a>
                       </div>
                       <div className="card-body">
                           <h3 className="card-title">Yash Pandey</h3>
                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                           lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum etc etc etc .</p>
                       </div>
                   </div>
                </div>
                <div className="col-9 col-md-6 col-lg-5">
                   <div className="card">

                   <img className="card-img-top" src={Pandey} alt="Yash pandey"></img>
                       <div className="img-overlay col-12 hide">
                       <a className=" btn text-white" href="https://"><i className="fab fa-linkedin fa-2x"></i></a>
                        <a className=" btn text-white" href="https://"><i className="fab fa-github-square fa-2x"></i></a>
                        <a className=" btn text-white" href="https://"><i className="fas fa-envelope fa-2x"></i></a>
                        <a className=" btn text-white" href="https://"><i className="fab fa-instagram fa-2x"></i></a>
                       </div>
                       <div className="card-body">
                       <h3 className="card-title">Yash Pandey</h3>
                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                           lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum etc etc etc .</p>
                       </div>
                   </div>
                </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Members;
