import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EventList extends Component {
    
    constructor(props)
    {
        super(props);

        this.state = { events : [] };
    }

    componentDidMount()
    {
       axios.get(`/api/eventdata/`)
            .then(res => {
                this.setState({ events: res.data });
            })
            .catch(err => console.log("Error" + err));
    }

    render() {
        return (
            <div className="container row">
                <ul>
                    {this.state.events.map( event => 
                        <div key={event._id}>
                            <li className="col-11" >
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{event.title}</h5>
                                        <h6> {event.eventDate.substring(0,10)} </h6>
                                        <p className="card-text">{event.shortDescription}</p>
                                        <Link to={`/events/${event.slug}`}>
                                            <button className="btn btn-primary">Read More</button>
                                        </Link>
                                    </div>
                                </div> 
                            </li>
                        </div>
                    )}
                </ul>
            </div>
        );
    }
}

export default EventList;