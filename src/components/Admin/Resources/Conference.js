import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Container, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CreateConference from './CreateConference';

class Conference extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            conference: [],
        }
    }

    UpdateState = () => {
        axios.get(`/api/conferencedata/`)
        .then(res => {
            this.setState({
                ...this.state,
                conference: res.data
            });
            console.log("New set of Conferences Fetched");
        })
        .catch(err => console.log("Error" + err));
    }

    componentDidMount() {
        this.UpdateState();
    }

    onConferenceDelete = (conference) => {
        axios.delete(`/api/conferencedata/${conference._id}`, {
            headers: {authorization: `Bearer ${window.localStorage.getItem("token")}`,}
        })
            .then(res => {
                alert("Conference Deleted!");
                this.UpdateState();
            })
    }

    render() {
        return (

            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="display-4 align-content-center">Conferences</div>
                    <Container>
                        <ListGroup>
                            <TransitionGroup className="resource-list">
                                {this.state.conference.map((conference) => (
                                    <CSSTransition key={conference._id} timeout={600} classNames='fade'>
                                        <ListGroupItem>
                                            <div className="row list-item">
                                                <div className="col-10">
                                                    {conference.name}
                                                </div>
                                                <div className="col-1">
                                                    <Button className='remove-btn btn btn-danger' color='danger' size='sm'
                                                        onClick={this.onConferenceDelete.bind(this, conference)} >
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

                <CreateConference UpdateState ={this.UpdateState} />

            </div>
        );
    }
}

export default Conference;
