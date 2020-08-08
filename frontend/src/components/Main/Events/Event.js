import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Event(event)
{   
    return (
        <div className="conatiner">
            <div className="row">
                <div className="col-12 display-2">
                    {event.title}
                </div>
                <div className="col-12 text-body">
                    {event.eventDate}
                </div>
                <div className="col-12 text">
                    {event.description}
                </div>
                <div>
                    {event.location}
                </div>
            </div>
        </div>
    );
}

export default Event;