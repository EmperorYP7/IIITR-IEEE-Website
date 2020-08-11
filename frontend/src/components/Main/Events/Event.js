import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Event extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            event: {
                title: '',
                description: '',
                shortDescription: '',
                eventDate: new Date(),
                location: '',
                gcalender: '',
                gmaps: ''
            }
        };
    }

    componentDidMount()
    {
        const string = this.props.location.pathname;
        const slug = string.substring(8)
        axios.get(`/api/eventdata/${slug}`)
            .then(res => {
                console.log("Event Axios Response");
                console.log(res.data);
                this.setState({ event: res.data });
            })
            .catch(err => console.log("Error : " + err));
    }   

    render(){
        return (
             <div className="row">
                    <div className="col-12 display-2">
                        {this.state.event.title}
                    </div>
                    <div className="col-12 text">
                        {this.state.event.description}
                    </div>
                    <div>
                        {this.state.event.location}
                    </div>
                    <div>
                        <a target="_blank" href={`${this.state.event.gcalender}`}><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif" /></a>
                    </div>
                    <div>
                        <iframe src={this.state.event.gmaps} width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
            </div>
        );
    }
}

export default Event;