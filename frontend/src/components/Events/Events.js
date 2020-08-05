import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Events.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class Events extends Component {
    
    state = {
        events: []
    }

    componentDidMount()
    {
        Axios.get(`/api/eventdata`)
            .then(res => {
                this.setState({ events : res.events });
                console.log(res.events);
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div className="container row">
                <ul>
                    {this.state.events.map( event => 
                        <li className="col-11">
                            <div className="card">
                                <div className="card-body" id={event.id}>
                                    <h5 className="card-title">{event.title}</h5>
                                    <p className="card-text">{event.shortDescription}</p>
                                    <Link to={`/events/${event.slug}`}>
                                        <a className="btn btn-primary">Read More</a>
                                    </Link>
                                </div>
                                </div>
                        </li>
                    )};
                </ul>
            </div>
        );
    }
}

export default Events;