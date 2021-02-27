import React from 'react';
import './Carousal.css';


class Carousal extends React.Component {

    render() {
        return (
          <div className="container-fluid my-5">
            <h2 className="text-center col-head">Testimonials</h2><hr></hr>
            <div id="carouselExampleSlidesOnly" className="carousel slide fill" data-ride="carousel" data-interval="3000">
  <div className="row quote">
    <div className="col-12 col-sm-10 offset-sm-1">
    <div className="carousel-inner ">
    <div className="carousel-item active px-5" >
    <p className="text-white light-wt "><i className="fas fa-quote-left pr-2"></i>People talk about job security. No one can give you that. Job security depends on the company. What IEEE can do - and I use the phrase carefully - is offer security. You can be the most valuable engineer by being current in technology and by networking with others. If you take advantage of the products and services that IEEE offers, you will become the most valuable engineer in your organization. And if your job goes away, you'll have no trouble finding another.<i className="fas fa-quote-right pl-2"></i></p>
    <div className="col-12 text-center text-white light-wt">
      <p>- IEEE Senior Member,
IEEE Past President</p>
    </div></div>

    <div className="carousel-item px-5">
    <p className="text-white light-wt"> <i className="fas fa-quote-left pr-2"></i>I joined IEEE because innovation does not happen in a vacuum. You can have the smartest people in the world, but without collaboration the technology is not going to go anywhere.<i className="fas fa-quote-right pl-2"></i></p>
    <div className="col-12 text-center text-white light-wt">
      <p>- Elizabeth Plowman
          <p>IEEE Graduate Student Member,</p>
      Drexel University</p>
    </div>
    </div>
    <div className="carousel-item px-5">
    <p className="text-white light-wt"> <i className="fas fa-quote-left pr-2"></i>It’s the interaction among people, the side conversations, and the chatting in front of a whiteboard that makes IEEE so valuable.<i className="fas fa-quote-right pl-2"></i></p>
    <div className="col-12 text-center text-white light-wt">
      <p>- Dr. Vinton Cerf,
        <p>IEEE Fellow,
          Vice President &nbsp Chief Evangelist, Google.                  
          <p>Received the Draper Prize for development of the Internet with IEEE members Leonard Kleinrock, Robert Kahn and Dr. Lawrence Roberts</p>                   
        </p>
      </p>
    </div>
    </div>
  </div>
    </div>
  </div>
</div>
          </div>
        );
    }
}

export default Carousal;
