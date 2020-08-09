import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Event(props)
{   
    return (
        <div className="conatiner">
            <div className="row">
                <div className="col-12 display-2">
                    {props.event.title}
                </div>
                <div className="col-12 text-body">
                    {props.event.eventDate}
                </div>
                <div className="col-12 text">
                    {props.event.description}
                </div>
                <div>
                    {props.event.location}
                </div>
                <div>
                    <a target="_blank" href={props.event.gcalender}><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif" /></a>
                </div>
                <div>
                    <iframe src={props.event.gmaps} width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Event;