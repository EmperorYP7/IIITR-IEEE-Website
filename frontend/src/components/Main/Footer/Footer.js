import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
// import { Link } from 'react-router-dom';
import tushar from "./tushar.png";
import yash from "./yash.jpeg";
import {DEVELOPERS} from './DevelopersList';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

          developers: DEVELOPERS
        }
      }
   
    render() {
        const print = this.state.developers.map((developer) => {
            return (
      
                <div className="col-12 col-lg-6">
                <div className="media">
                    <img className="d-flex mr-3 img-thumbnail align-self-center small-image"
                            src={developer.img} alt={developer.name}></img>
                    <div className="media-body">
                        <h2 className="mt-2 developer-name">{developer.name}
                        </h2>
                        <p className="d-none d-sm-block">{developer.intro}</p>
                        <br></br>
                        <a className=" btn text-dark dev-icon" rel="noopener noreferrer" href={developer.linkedin}><i className="fab fa-linkedin fa-2x"></i></a>
                        <a className=" btn text-dark dev-icon" rel="noopener noreferrer" href={developer.github}><i className="fab fa-github fa-2x"></i></a>
                        <a className=" btn text-dark dev-icon" rel="noopener noreferrer" href={"mailto:"+developer.mail}><i className="fas fa-envelope fa-2x"></i></a>
                    </div>
                </div>
            </div>
      
            );
          });
        return (
            <div>
                {/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="col-12 modal-title text-center" id="exampleModalLabel">DEVELOPERS</h5>
        <button type="button" className="close text-center" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"><i className="fas fa-times fa-2x"></i></span>
        </button>
      </div>
      <div className="modal-body">
        <div className="container">
        <div className="row row-content justify-content-center">
       {print}
        </div>
        </div>
      </div>
      <div className="modal-footer">
      <p className="text-dark col-12 text-center">Web Team IIITRanchi © Copyright 2020 </p>
      </div>
    </div>
  </div>
</div>
    <footer className="footer pb-0">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 ">
                    <div className="text-center ">
                        <h5>Connect with us</h5><hr></hr>
                        <a className=" btn text-white" rel="noopener noreferrer" href="https://"><i id="iconer" className="fab fa-facebook-square fa-2x"></i></a>
                        <a className=" btn text-white" rel="noopener noreferrer" href="https://"><i id="iconer" className="fab fa-twitter-square fa-2x"></i></a>
                        <a className=" btn text-white" rel="noopener noreferrer" href="https://"><i id="iconer" className="fab fa-linkedin fa-2x"></i></a>
                        <a className=" btn text-white" rel="noopener noreferrer" href="https://"><i id="iconer" className="fab fa-instagram fa-2x"></i></a>
                        <a className=" btn text-white" rel="noopener noreferrer" href="mailto:iiitranchi@contact.info"><i id="iconer" className="fas fa-envelope fa-2x"></i></a>
                    </div>
                </div>
                <div className="col-12 col-md-6 text-center addr">
                    <h5>Our Address</h5><hr></hr>
                    <address>
                        <ul className="list-unstyled">
                            <li className="institute-address"><a id="college-link" href="http://iiitranchi.ac.in/">Indian Institute of Information Technology, Ranchi</a></li>
                            <li className="institute-address">Sirkha Toli, Kali Nagar, Namkum, </li>
                            <li className="institute-address">Ranchi, Jharkhand 834010</li>
                            <li className="institute-address">Tel : 123-24578</li>
                            <li className="institute-address">Mail : <a className="footer-a" rel="noopener noreferrer" href="mailto:iiitranchi@contact.info">iiitranchi@contact.info</a></li>
                        </ul>



                        <br></br>
		            </address>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row justify-content-center mt-5 mb-0 pt-3">
                <div  className="col-2 col-sm-1 ">
                    <button id="dev" className=" btn text-white " data-toggle="modal" data-target="#exampleModal"><i className="fas fa-laptop-code fa-2x"></i><span>Developers</span></button>
                 </div>

                 <div className="col-6 col-sm-10 text-center">
                     <hr></hr>

                        <p className="text-white ">Web Team IIITRanchi © Copyright 2020 </p>

                 </div>
                 <div className="col-2 col-sm-1">
                    <a id="up" className=" btn text-white " rel="noopener noreferrer" href="#scrollup"><i className="fas fa-chevron-circle-up fa-2x" id="to-top" onClick={window.scrollTo({top:0,behavior:'smooth'})}></i><br></br><span>Back to Top</span></a>
                </div>
            </div>
           </div>


    </footer>
            </div>
        );
    }
}

export default Footer;
