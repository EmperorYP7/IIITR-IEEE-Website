import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
// import { Link } from 'react-router-dom';
//import CardColumns from 'react-bootstrap/CardColumns';
//import Card from 'react-bootstrap/Card';

import {DEVELOPERS} from './DevelopersList';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      developers: DEVELOPERS
    }
  }

  render() {
    const show = this.state.developers.map((developer) => {
      return (
        <div className="card col-lg-4 col-md-6 col-sm-6 container" id={developer.id} key={developer.id}>
          <img src={`${developer.img}`} className="card-img-top img-fluid dev-img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{developer.name}</h5>
            <p className="card-text">{developer.intro}</p>
            <p className="card-text"><small className="text-muted">{developer.mutedText}</small></p>
            <div className="row card-footer">
                <a className="col-4 btn text-dark dev-icon" rel="noopener noreferrer" href={developer.linkedin} target="_blank">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a className="col-4 btn text-dark dev-icon" rel="noopener noreferrer" href={developer.github} target="_blank">
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a className="col-4 btn text-dark dev-icon" rel="noopener noreferrer" href={"mailto:" + developer.mail} target="_blank">
                  <i className="fas fa-envelope fa-2x"></i>
                </a>
            </div>
          </div>
        </div>
      );
    });
    return (<div>
      {/* <!-- Modal --> */}
      <div className="modal vw-100 fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="col-12 modal-title text-center  dev-title" id="exampleModalLabel">Developers</h5>
              <button type="button" className="close text-center" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">
                  <i className="fas fa-times fa-2x"></i>
                </span>
              </button>
            </div>
            <div className="modal-body container-fluid">
              <div className="row conatiner">
                {show}
              </div>
            </div>
            <div className="modal-footer">
              <p className="text-dark col-12 text-center">WebDev Team IEEESB IIITRanchi© Copyright 2020</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 ">
              <div className="text-center ">
                <h5>Connect with us</h5>
                <hr></hr>
                <a className=" btn text-white" rel="noopener noreferrer" href="https://">
                  <i id="iconer" className="fab fa-facebook-square fa-2x"></i>
                </a>
                <a className=" btn text-white" rel="noopener noreferrer" href="https://">
                  <i id="iconer" className="fab fa-twitter-square fa-2x"></i>
                </a>
                <a className=" btn text-white" rel="noopener noreferrer" href="https://">
                  <i id="iconer" className="fab fa-linkedin fa-2x"></i>
                </a>
                <a className=" btn text-white" rel="noopener noreferrer" href="https://">
                  <i id="iconer" className="fab fa-instagram fa-2x"></i>
                </a>
                <a className=" btn text-white" rel="noopener noreferrer" href="mailto:iiitranchi@contact.info">
                  <i id="iconer" className="fas fa-envelope fa-2x"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center addr">
              <h5>Our Address</h5>
              <hr></hr>
              <address>
                <ul className="list-unstyled">
                  <li className="institute-address">
                    <a id="college-link" href="http://iiitranchi.ac.in/">Indian Institute of Information Technology, Ranchi</a>
                  </li>
                  <li className="institute-address">Sirkha Toli, Kali Nagar, Namkum,
                  </li>
                  <li className="institute-address">Ranchi, Jharkhand 834010</li>
                  <li className="institute-address">Tel : 123-24578</li>
                  <li className="institute-address">Mail :
                    <a className="footer-a white-link" rel="noopener noreferrer" href="mailto:iiitranchi@contact.info">iiitranchi@contact.info</a>
                  </li>
                </ul>

                <br></br>
              </address>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center  mb-0">
            <div className="col-2 col-sm-1 ">
              <button id="dev" className=" btn text-white " data-toggle="modal" data-target="#exampleModal">
                <i className="fas fa-laptop-code fa-2x"></i>
                <span>Developers</span>
              </button>
            </div>

            <div className="col-6 col-sm-10 text-center">
              <div className="row mb-0">
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center  w-100"> <a className="white-link"  href="https://www.ieee.org/">IEEE.org</a></div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center  w-100"><a className="white-link" href="https://ieeexplore.ieee.org/Xplore/home.jsp">IEEE Xplore Digital Library</a></div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center  w-100"><a className="white-link" href="https://standards.ieee.org/">IEEE Standards</a></div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center  w-100"><a className="white-link" href="https://www.ieee.org/membership/join/index.html">IEEE Membership</a></div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center  w-100"><a className="white-link" href="https://spectrum.ieee.org/">IEEE Spectrum</a></div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center  w-100"> <a className="white-link"  href="https://www.ieee.org/sitemap.html">More sites</a></div>
              </div>
             
              
              
              
              
             
              <hr></hr>

              <p className="text-white ">WebDev Team IEEESB IIITRanchi © Copyright 2020
              </p>

            </div>
            <div className="col-2 col-sm-1">
              <a id="up" className=" btn text-white " rel="noopener noreferrer" href="#scrollup">
                <i className="fas fa-chevron-circle-up fa-2x" id="to-top" onClick={window.scrollTo({top: 0, behavior: 'smooth'})}></i>
                <br></br>
                <span>Back to Top</span>
              </a>
            </div>
          </div>
        </div>

      </footer>
    </div>);
  }
}

export default Footer;
