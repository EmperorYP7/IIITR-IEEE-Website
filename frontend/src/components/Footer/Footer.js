import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';


class Footer extends Component {

    render() {
        return (
            <div>
                  <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-4 ">

                    <div id="connect" className="text-center ">
                        <h5>Connect with us</h5><hr></hr>
                        <a className=" btn text-white" href="http://"><i className="fab fa-facebook-square fa-2x"></i></a>
                        <a className=" btn text-white" href="http://"><i className="fab fa-twitter-square fa-2x"></i></a>
                        <a className=" btn text-white" href="http://"><i className="fab fa-linkedin fa-2x"></i></a>
                        <a className=" btn text-white" href="http://"><i className="fab fa-instagram fa-2x"></i></a>
                        <a className=" btn text-white" href="mailto:iiitranchi@contact.info"><i className="fas fa-envelope fa-2x"></i></a>
                    </div>
                </div>

                <div className="col-7 col-sm-3 offset-3 text-center ">
                    <h5>Our Address</h5><hr></hr>
                    <address>
                        Sirkha Toli, Kali Nagar, Namkum,
                        Ranchi, Jharkhand 834010
                        Tel : 123-24578
                        Mail : <a href="mailto:iiitranchi@contact.info">iiitranchi@contact.info</a>
                        <br></br>
		              </address>
                </div>

           </div>
           <div className="row justify-content-center mt-5">
               <hr></hr>
                <div className="col-auto ">
                    <p>Web Team IIITRanchi © Copyright 2020 </p>
                </div>
           </div>
        </div>
    </footer>
            </div>
        );
    }
}

export default Footer;
