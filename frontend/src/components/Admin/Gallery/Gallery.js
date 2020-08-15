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

    onImageDelete = (_id) => {
        axios.delete(`/api/gallerydata/${_id}`)
            .then(res => {
                alert("Image Removed!");
                this.UpdateState();
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
                                {this.state.images.map(({ _id, imgPath }) => (
                                    <CSSTransition key={_id} timeout={600} classNames='fade'>
                                        <ListGroupItem>
                                            <div className="row list-item">
                                                <div className="col-11">
                                                    {imgPath}
                                                </div>
                                                <div className="col-1">
                                                    <Button className='remove-btn' color='danger' size='sm'
                                                        onClick={this.onImageDelete.bind(this, _id)} >
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