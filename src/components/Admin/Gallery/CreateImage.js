import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import UploadPic from './UploadPic';

class CreateImage extends React.Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.handleImageAdd = this.handleImageAdd.bind(this);

        this.state = {
            album: '',
            imgPath: '',
            imageUploaded: false
        }
    }
    componentDidMount() {

    }

    handleImageAdd = (e) => {
        e.preventDefault();
        if(!this.state.imageUploaded)
        {
            alert("Please upload Image")
            return
        }
        const image = {
            album: this.state.album,
            imgPath: this.state.imgPath
        }
        axios.post(`https://ieeemock2.azurewebsites.net/api/gallerydata/`, image)
            .then(res => {
                this.setState({
                    album: '',
                    imgPath: '',
                    imageUploaded: false
                });
                this.props.UpdateState();
                alert("Image added");
            })
            .catch(err => {
                console.log(err);
            })
    };

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="col-lg-6 col-md-12">
                <div className="display-4 align-content-center">Add New Image</div>
                <form className="col-12 align-content-center" onSubmit={this.handleImageAdd}>
                    <div className="form-group">
                        <label htmlFor="name">Album</label>
                        <input type="text" required={true} className="form-control" name="album" onChange={this.changeHandler} placeholder="Album Name" value={this.state.album} />
                    </div>
                    <button type="submit" className="btn btn-success">Add Image</button>
                </form>
                    <div>
                        <label htmlFor="event" className="upload-event-poster">Upload Image</label>
                        {this.state.imageUploaded ? <p>Image uploaded</p> : <UploadPic setImagePath={ path => this.setState({imgPath: path, imageUploaded: true}) }/> }
                    </div>
            </div>
        );
    }
}

export default CreateImage;
