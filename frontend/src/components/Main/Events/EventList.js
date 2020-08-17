import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Events.css';
import HashLoader from './AwesomeComponent';
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
                if(res.data>0){
                this.setState({loaded:true});
                }
                else{
                    this.setState({
                        loaded:true
                    });
                }
            });
    }

    render() {
            if(this.state.loaded){
                return (
                <div>
                    <div className="col-12 text-center event-header">
                        <hr />
                        <h2 className="header ">Events</h2>
                        <hr ></hr>
                    </div>
                    <div className="event-box" >
                        {this.state.events.map( event =>
                            <div key={event._id}>
                                <div className="cards " >
                                    <div   className="card  event-card">
                                        <div className="card-body event-card-body">
                                            <h5 className="card-title">{event.title} </h5>
                                            <h6 className="card-date"><i class="fas fa-1x event-logo fa-calendar-check"></i> {event.eventDate.substring(0,10)} </h6>
                                            <p className="card-text">{event.shortDescription}</p>
                                            <Link to={`/events/${event.slug}`}>
                                                <button className="btn event-button btn-dark">Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        }
        else {
            if(!this.state.loaded) {
                return(
                        <div className="loader"><HashLoader message="Hold Tight!" /></div>
                    );
                }
        }
    }
}

export default EventList;
