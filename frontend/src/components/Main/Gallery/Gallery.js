import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css';
import axios from 'axios';
const imageim = require.context('../../../../../backend/uploads/images/gallery/', true);

class Gallery extends Component {
    constructor(props)
    {
        super(props);
        this.state = {images: [],albumsp:[]};
    }
    componentDidMount() {
        axios.get(`/api/gallerydata`)
            .then(res => {
                this.setState({ images: res.data });
                /*var albumnames = [];
                for(const v in this.state.images){
                    albumnames.push(v.album);}
                albumnames = albumnames.filter((v, i, a) => a.indexOf(v) === i); 
                this.setState({albumsp:albumnames});*/

            })
            .catch(err => console.log("Error" + err));
    }
    
    render() {  console.log("images",this.state.images);
                console.log("slbum",this.state.albumsp);

        return (<div>
            <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center album-header">
                        <h2>Gallery</h2>
                            <hr></hr>
                        </div>
                    </div>
                    </div>
                    {this.state.images.map((images) =>{return(<img className="card-img-top" src={imageim('./'+images.imgPath.substring(images.imgPath.lastIndexOf('/')+1))} alt="Image" id = "image"/>);})}
            </div>
        );
    }
}

export default Gallery;
