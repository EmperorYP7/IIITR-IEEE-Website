import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import HashLoader from '../AwesomeComponent';
import NotFound from '../NotFound/NotFound';
import gcalendar from './gc-logo.png'
import './EventLink.css';

class Event extends Component {

    constructor(props) {
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
            Dinaank: '',
            Time: ''
        };
    }

    componentDidMount() {
        const string = this.props.location.pathname;
        const slug = string.substring(8)
        axios.get(`https://ieeemock2.azurewebsites.net/api/eventdata/${slug}`)
            .then(res => {
                this.setState({
                    ...this.state,
                    event: res.data
                });
                if (res.data !== null)
                    this.ExtractDate();
                if (res.data > 0) {
                    this.setState({ loaded: true });
                }
                else {
                    this.setState({ loaded: true });
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({ loaded: true })
            });
    }

    ExtractDate() {
        const completeDate = new Date(this.state.event.eventDate);
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const day = days[completeDate.getDay()];
        const date = completeDate.getDate();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const month = months[completeDate.getMonth()];
        const year = completeDate.getFullYear();
        const hour = completeDate.getHours();
        const minute = completeDate.getMinutes();

        this.setState({
            Dinaank: "Date: " + day + ", " + date + " " + month + ", " + year,
            Time: "Time: " + hour + ":" + minute
        })
    }
    render() {
        if (this.state.loaded) {
        return (
                <div className=" container about-event">
                    {this.state.event !== null ? (
                        <div className="row">
                            <div className="container">
                                <img className="card-img-top event-img" src={`https://ieeemock2.azurewebsites.net/upload/image/event/${this.state.event.imgPath}`} alt="img" id={this.state.event._id} />
                            </div>
                            <div className="col-12 event-title">
                                {this.state.event.title}
                            </div>
                            <div className="col-12  event-desc">
                                {this.state.event.description}
                            </div>
                            <div className="col-12  event-date">
                                <p><i className="far calendar fa-calendar-alt"></i>{this.state.Dinaank}</p>
                                <p><i className="far clock fa-clock"></i>{this.state.Time}</p>
                            </div>
                            <div className="col-12 location">
                                {this.state.event.location}
                            </div>
                            <div>
                              <a target="_blank" rel="noopener noreferrer" href={`${this.state.event.gcalender}`}><img border="0" className="img-fluid google-cal" alt="Google Calendar" src={`${gcalendar}`} /></a>
                            </div>
                            <div>
                                {/*<iframe src={`${this.state.event.gmaps}`} title={`${this.state.event._id}`} width="auto" height="auto" frameBorder="0" style={`border:0;`} allowFullscreen={true} aria-hidden="false" tabIndex="0"></iframe>*/}
                            </div>
                        </div>
                    ):(
                        <NotFound />
                    )}
                </div>
                )
        }
        else {
            if (!this.state.loaded) {
                return (
                    <div className="loader"><HashLoader message="Hold Tight!" /></div>
                );
            }
        }

    }
}

export default Event;
