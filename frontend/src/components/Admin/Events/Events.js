import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Container, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Events.css'
import CreateEvent from './CreateEvent'

class Events extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
        }
    }

    UpdateState = () => {
        axios.get(`/api/eventdata/`)
        .then(res => {
            this.setState({
                ...this.state,
                events: res.data
            });
            console.log("New set of events Fetched");
        })
        .catch(err => console.log("Error" + err));
    }

    componentDidMount() {
        this.UpdateState();
    }

    onEventDelete = (_id) => {
        axios.delete(`/api/eventdata/${_id}`)
            .then(res => {
                alert("Event Deleted!");
                this.UpdateState();
            })
    }

    render() {
        return (

            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="display-4 align-content-center">Events</div>
                    <Container>
                        <ListGroup>
                            <TransitionGroup className="event-list">
                                {this.state.events.map(({ _id, title }) => (
                                    <CSSTransition key={_id} timeout={600} classNames='fade'>
                                        <ListGroupItem>
                                            <div className="row list-item">
                                                <div className="col-10">
                                                    {title}
                                                </div>
                                                <div className="col-1">
                                                    <Button className='remove-btn' color='danger' size='sm'
                                                        onClick={this.onEventDelete.bind(this, _id)} >
                                                        <i className="fa fa-trash" aria-hidden="true"> Delete  </i>
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
            
                <CreateEvent UpdateState ={this.UpdateState} />

            </div>
        );
    }
}

export default Events;