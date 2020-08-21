import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Container, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Createresource from './CreateResources';

class Resources extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            resources: [],
        }
    }

    UpdateState = () => {
        axios.get(`https://ieeemock2.azurewebsites.net/api/resourcedata/`)
        .then(res => {
            this.setState({
                ...this.state,
                resources: res.data
            });
            console.log("New set of Resources Fetched");
        })
        .catch(err => console.log("Error" + err));
    }

    componentDidMount() {
        this.UpdateState();
    }

    onResourceDelete = (resource) => {
        axios.delete(`https://ieeemock2.azurewebsites.net/api/resourcedata/${resource._id}`)
            .then(res => {
                alert("Resource Deleted!");
                this.UpdateState();
            })
        axios.delete(`https://ieeemock2.azurewebsites.net/upload/pdf/resource/${resource.pdfPath}`)
        .then(  res => {
            console.log(res.data);
        })
    }

    render() {
        return (

            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="display-4 align-content-center">Resources</div>
                    <Container>
                        <ListGroup>
                            <TransitionGroup className="resource-list">
                                {this.state.resources.map((resource) => (
                                    <CSSTransition key={resource._id} timeout={600} classNames='fade'>
                                        <ListGroupItem>
                                            <div className="row list-item">
                                                <div className="col-10">
                                                    {resource.name}
                                                </div>
                                                <div className="col-1">
                                                    <Button className='remove-btn btn btn-danger' color='danger' size='sm'
                                                        onClick={this.onResourceDelete.bind(this, resource)} >
                                                        <i className="fa fa-trash" aria-hidden="true">Delete</i>
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

                <Createresource UpdateState ={this.UpdateState} />

            </div>
        );
    }
}

export default Resources;
