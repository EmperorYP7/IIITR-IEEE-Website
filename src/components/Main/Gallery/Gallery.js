import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css';
import axios from 'axios';
import HashLoader from '../AwesomeComponent';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = { images: [], albumsp: [] };
    }
    componentDidMount() {
        axios.get(`https://ieeemock2.azurewebsites.net/api/gallerydata`)
            .then(res => {
                this.setState({ images: res.data });
                const result = [];
                    const map = new Map();
                    for (const item of res.data) {
                    if(!map.has(item.album)){
                    map.set(item.album, true);
                    result.push({
                    album: item.album,
                });
                }
                this.setState({albumsp:result});
                }
                if (res.data > 0) {
                    this.setState({ loaded: true });
                }
                else {
                    this.setState({
                        loaded: true
                    });
                }
            })
            .catch(err => console.log("Error" + err));
    }



    render() {
        if (this.state.loaded) {//console.log(this.state.albumsp);
            return (
                <div>
                    {
                    this.state.albumsp.map((album123) => {
                        //console.log(album123);
                            let filtered = this.state.images.filter(t=>t.album === album123.album);
                            //console.log("IMAGES",this.state.images);
                            //console.log("ALBUM",filtered);
                            return(<div className="container" key={album123.album} id={album123.album}>
                                    <div className="row justify-content-center">
                                        <div className="col-12 text-center album-header">
                                            <h2>{album123.album}</h2>
                                            <hr></hr>
                                            <div id = "scroller">{
                                            filtered.map((filtered) => {
                                            //console.log("GOT",filtered);
                                            const imageName = filtered.imgPath;
                                            const url = `https://ieeemock2.azurewebsites.net/upload/image/gallery/${imageName}`;
                                            //console.log("THIS IS A FK'N URL",url);
                                            return (<img className="imgGal" height="300px" width="auto" src={url} alt="loading" id={filtered._id} key={filtered._id}/>);})}
                                    </div></div>
                        </div>
                    </div>);})}

                </div>
            );
        }
        else {
            if (!this.state.loaded) {
                return (
                    <div className="loader"><HashLoader message="Hold Tight!" /></div>
                );
            }
        }
    }
}

export default Gallery;
