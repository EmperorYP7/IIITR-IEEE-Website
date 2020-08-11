import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Event extends Component {

    constructor(props)
    {
        super(props);
        this.ExtractDate = this.ExtractDate.bind(this);

        this.state = {
            event: {
                title: '',
                description: '',
                shortDescription: '',
                eventDate: '',
                location: '',
                gcalender: '',
                gmaps: ''
            },
            Dinaank : '',
            Time: ''
        };
    }

    componentDidMount()
    {
        const string = this.props.location.pathname;
        const slug = string.substring(8)
        axios.get(`/api/eventdata/${slug}`)
            .then(res => {
                this.setState({
                    ...this.state,
                    event: res.data 
                });
                this.ExtractDate();
            })
            .catch(err => console.log("Error : " + err));
    }   

    ExtractDate() {
            const completeDate = new Date(this.state.event.eventDate);
            console.log(completeDate)
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const day =  days[completeDate.getDay()];
            const date = completeDate.getDate();
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const month = months[completeDate.getMonth()];
            console.log(month)
            const year = completeDate.getFullYear();
            
            const hour = completeDate.getHours();
            const minute = completeDate.getMinutes();

            this.setState({
                Dinaank : "Date: " +day+ ", " +date+ " " +month+ ", " +year,
                Time : "Time: "+hour+":"+minute
            })
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
                    <div className="col-12 text-body">
                        <p>{this.state.Dinaank}</p>
                        <p>{this.state.Time}</p>     
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