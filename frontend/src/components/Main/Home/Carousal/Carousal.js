import React from 'react';
import './Carousal.css';


class Carousal extends React.Component {

    render() {
        return (
          <div className="container-fluid my-5">
            <h2 className="text-center">Testimonials</h2><hr></hr>
            <div id="carouselExampleSlidesOnly" class="carousel slide fill" data-ride="carousel" data-interval="3000">
  <div className="row quote">
    <div className="col-12 col-sm-10 offset-sm-1">
    <div class="carousel-inner ">
    <div class="carousel-item active px-5" >
    <p className="text-white light-wt "><i class="fas fa-quote-left pr-2"></i>   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the le<i class="fas fa-quote-right pl-2"></i></p>
    <div className="col-12 text-center text-white light-wt">
      <p>~ Author Name</p>
    </div></div>
    
    <div class="carousel-item px-5">
    <p className="text-white light-wt"> <i class="fas fa-quote-left pr-2"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the le<i class="fas fa-quote-right pl-2"></i></p>
    <div className="col-12 text-center text-white light-wt">
      <p>~ Author Name</p>
    </div>
    </div>
    <div class="carousel-item px-5">
    <p className="text-white light-wt"> <i class="fas fa-quote-left pr-2"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the le<i class="fas fa-quote-right pl-2"></i></p>
    <div className="col-12 text-center text-white light-wt">
      <p>~ Author Name</p>
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
