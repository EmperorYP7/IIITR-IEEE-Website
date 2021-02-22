import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Container, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CreateImage from './CreateImage';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images : [],
        }
    }

    UpdateState = () => {
        axios.get(`/api/gallerydata/`)
        .then(res => {
            this.setState({
                ...this.state,
                images: res.data
            });
            console.log("New set of Images Fetched");
        })
        .catch(err => console.log("Error" + err));
    }

    componentDidMount() {
        this.UpdateState();
    }

    onImageDelete = (image) => {
        axios.delete(`/api/gallerydata/${image._id}`)
            .then(res => {
                alert("Image Removed!");
                this.UpdateState();
            })
        axios.delete(`/upload/image/gallery/${image.imgPath}`)
        .then(  res => {
            console.log(res.data);
        })
    }


    render() {
        return (
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="display-4 align-content-center">Gallery</div>
                    <Container>
                        <ListGroup>
                            <TransitionGroup className="member-list">
                                {this.state.images.map((image) => (
                                    <CSSTransition key={image._id} timeout={600} classNames='fade'>
                                        <ListGroupItem>
                                            <div className="row list-item">
                                                <div className="col-10">
                                                    <img src={`/upload/image/gallery/${image.imgPath}`} alt="img" id = {image._id} height="100rem" />
                                                </div>
                                                <div className="col-2">
                                                    <Button className='remove-btn btn btn-danger' color='danger' size='sm'
                                                        onClick={this.onImageDelete.bind(this, image)} >
                                                        <i className="fa fa-trash" aria-hidden="true"> Remove</i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </ListGroupItem>
                                    </CSSTransition>
                                ))}
                            </TransitionGroup>
                        </ListGroup>
                    </Container>
                </div>

                <CreateImage UpdateState ={this.UpdateState} />

            </div>
        );
    }
}

export default Gallery;
