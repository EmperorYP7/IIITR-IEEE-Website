import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Events.css';
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

            <div >
            <div className="col-12 text-center event-header">
  <hr className="style2"></hr>
                <h2 className="header "> Events</h2>
                  <hr className="style2"></hr>
            </div>

<div  className="box-bg">
        <div className="event-bckgrnd">

                <div >
                    {this.state.events.map( event =>
                        <div key={event._id}>
                            <div className="col-11 list" >
                                <div   id="tv" className="card event-card">
                                    <div className="card-body event-card-body">

                                        <h5 className="card-title"> <i class="fas fa-3x event-logo fa-calendar-check"></i>{event.title}</h5>
                                        <h6 className="card-date"> {event.eventDate.substring(0,10)} </h6>
                                        <p className="card-text">{event.shortDescription}</p>
                                        <Link to={`/events/${event.slug}`}>
                                            <button className="btn btn-dark">Read More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

</div>
</div>
            </div>
        );
    }
}

export default EventList;
