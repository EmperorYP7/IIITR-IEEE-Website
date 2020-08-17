import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import HashLoader from './AwesomeComponent';

import './EventLink.css';

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
                gmaps: '',
                imgPath: ''
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
                if(res.data>0){
                this.setState({loaded:true});
                }
                else{
                this.setState({loaded:true});
                }
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
      if(this.state.loaded){

        return (
<div className=" container about-event">
            <div className="row">
                    <div>
                        <img className="card-img-top" src={`http://localhost:5000/upload/image/event/${this.state.event.imgPath}`} alt="Image" id = {this.state.event._id} />
                    </div>
                    <div className="col-12 event-title">
                        {this.state.event.title}
                    </div>
                    <div className="col-12  event-desc">
                        {this.state.event.description}
                    </div>
                    <div className="col-12  event-date">
                        <p><i class="far calendar fa-calendar-alt"></i>{this.state.Dinaank}</p>
                        <p><i class="far clock fa-clock"></i>{this.state.Time}</p>
                    </div>
                    <div className="col-12 location">
                        {this.state.event.location}
                    </div>
                    <div>
                        <a rel="noopener noreferrer" className="google-button"target="_blank"  href={`${this.state.event.gcalender}`}><img border="0" alt="Google Calender" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif" /></a>
                    </div>
                    <div>
                        <iframe title="gmaps" src={this.state.event.gmaps} width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
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

export default Event;
