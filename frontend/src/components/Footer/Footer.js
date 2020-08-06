import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { Link } from 'react-router-dom';


class Footer extends Component {

    render() {
        return (
            <div>
    <footer className="footer pb-0">
        <div className="container">
            <div className="row"> 
                <div className="col-12 col-md-6 ">
                    <div className="text-center ">
                        <h5>Connect with us</h5><hr></hr>
                        <a className=" btn text-white" href="https://"><i className="fab fa-facebook-square fa-2x"></i></a>
                        <a className=" btn text-white" href="https://"><i className="fab fa-twitter-square fa-2x"></i></a>
                        <a className=" btn text-white" href="https://"><i className="fab fa-linkedin fa-2x"></i></a>
                        <a className=" btn text-white" href="https://"><i className="fab fa-instagram fa-2x"></i></a>
                        <a className=" btn text-white" href="mailto:iiitranchi@contact.info"><i className="fas fa-envelope fa-2x"></i></a>
                    </div>
                </div>            
                <div className="col-12 col-md-6 text-center addr">
                    <h5>Our Address</h5><hr></hr>
                    <address>
                        <ul className="list-unstyled">
                            <li>Sirkha Toli, Kali Nagar, Namkum, </li>
                            <li>Ranchi, Jharkhand 834010</li>
                            <li>Tel : 123-24578</li>
                            <li>Mail : <a href="mailto:iiitranchi@contact.info">iiitranchi@contact.info</a></li>
                        </ul>
                        
                        
                        
                        <br></br>
		            </address>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row justify-content-center mt-5 mb-0 pt-3"> 
                <div  className="col-2 col-sm-1 ">
                    <a id="dev" className=" btn text-white " href="https://"><i className="fas fa-laptop-code fa-2x"></i><span>Developers</span></a>
                 </div>   
                    
                 <div className="col-6 col-sm-10 text-center">
                     <hr></hr>
                     <Link to="/admin">
                        <p className="text-white">Web Team IIITRanchi © Copyright 2020 </p>
                     </Link>
                 </div>
                 <div className="col-2 col-sm-1">
                    <a id="up" className=" btn text-white " href="#scrollup"><i className="fas fa-chevron-circle-up fa-2x"></i><br></br><span>Back to Top</span></a>
                </div>
            </div>
           </div>
           
        
    </footer>
            </div>
        );
    }
}

export default Footer;
