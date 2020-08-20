import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Events.css';
import HashLoader from '../AwesomeComponent';
import { Link } from 'react-router-dom';

class EventList extends Component {

    constructor(props)
    {
        super(props);

        this.state = { events : [],
        countRun : 0 };
    }

    componentDidMount()
    {
       axios.get(`http://ieeemock2.azurewebsites.net/api/eventdata/`)
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
    past(event) {
        const today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const d1= Date.parse(event.eventDate.substring(0,10));
        const d2=Date.parse(date);
        if (d1 < d2) {

            return(
                <div className="cards " >
                                    <div   className="card  event-card">
                                        <div className="card-body event-card-body">
                                            <h5 className="card-title">{event.title} </h5>
                        <h6 className="card-date"><i className="fas fa-1x event-logo fa-calendar-check"></i> {event.eventDate.substring(0,10)}</h6>
                                            <p className="card-text">{event.shortDescription}</p>
                                            <Link to={`/events/${event.slug}`}>
                                                <button className="btn event-button btn-dark">Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
            );
        }


    }
    upcoming(event) {
        const today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const d1= Date.parse(event.eventDate.substring(0,10));
        const d2=Date.parse(date);
        if (d1 > d2) {

            return(
                <div className="cards " >
                                    <div   className="card  event-card">
                                        <div className="card-body event-card-body">
                                            <h5 className="card-title">{event.title} </h5>
                        <h6 className="card-date"><i className="fas fa-1x event-logo fa-calendar-check"></i> {event.eventDate.substring(0,10)}</h6>
                                            <p className="card-text">{event.shortDescription}</p>
                                            <Link to={`/events/${event.slug}`}>
                                                <button className="btn event-button btn-dark">Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
            );
        }



    }

    running(event) {
        const today = new Date(Date.now);
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const d1 = Date.parse(event.eventDate.substring(0,10));
        const d2 = Date.parse(date);
        if (d1 === d2) {
            this.setState({countRun:1});
            return(
                <div className="cards " >
                                    <div   className="card  event-card">
                                        <div className="card-body event-card-body">
                                            <h5 className="card-title">{event.title} </h5>
                        <h6 className="card-date"><i className="fas fa-1x event-logo fa-calendar-check"></i> {event.eventDate.substring(0,10)}</h6>
                                            <p className="card-text">{event.shortDescription}</p>
                                            <Link to={`/events/${event.slug}`}>
                                                <button className="btn event-button btn-dark">Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
            );
        }



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
                    <h2 className="text-center">Running Events</h2><hr></hr>
                        {this.state.events.map( event =>
                            <div key={event._id}>
                               {this.running(event)}
                            </div>
                        )}

                    <h2 className="text-center">Upcoming Events</h2><hr></hr>
                        {this.state.events.map( event =>
                            <div key={event._id}>
                               {this.upcoming(event)}
                            </div>
                        )}

                    <h2 className="text-center">Past Events</h2><hr></hr>
                        {this.state.events.map( event =>
                            <div key={event._id}>
                               {this.past(event)}
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
