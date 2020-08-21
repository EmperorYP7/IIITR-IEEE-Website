import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import UplaodImage from './UploadImage';
import './CreateEvent';

class CreateEvent extends React.Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.handleEventSubmit = this.handleEventSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            title: '',
            description: '',
            shortDescription: '',
            eventDate: new Date(),
            location: '',
            gmaps: '',
            gcalender: '',
            imgPath: '',
            imageUploaded: false
        };
    }
    componentDidMount() {

    }

    handleEventSubmit = (e) => {
        e.preventDefault();
        if(!this.state.imageUploaded)
        {
            alert("Please upload Event Poster")
            return
        }
        const event = {
            title: this.state.title,
            description: this.state.description,
            shortDescription: this.state.shortDescription,
            eventDate: this.state.eventDate,
            location: this.state.location,
            gcalender: this.state.gcalender,
            gmaps: this.state.gmaps,
            imgPath: this.state.imgPath
        }
        axios.post(`https://ieeemock2.azurewebsites.net/api/eventdata/`, event)
            .then(res => {
                console.log(res);
                this.setState({
                    title: '',
                    description: '',
                    shortDescription: '',
                    eventDate: new Date(),
                    location: '',
                    gcalender: '',
                    gmaps: '',
                    imgPath: '',
                    imageUploaded: false
                });
                this.props.UpdateState();
                alert("Event Created");
            })
            .catch(err => {
                console.log(err);
            })
    };

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleChange = date => {
        this.setState({
          evnetDate: date
        });
    }

    render() {
        return (
            <div className="col-lg-6 col-md-12">
                <div className="display-4 align-content-center">Create New Event</div>
                    <form className="col-12 align-content-center" onSubmit={this.handleEventSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" required={true} className="form-control" name="title" onChange={this.changeHandler} placeholder="Example input placeholder" value={this.state.title} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="shortDescription">Short Description</label>
                            <input type="text" required={true} className="form-control" name="shortDescription" onChange={this.changeHandler} value={this.state.shortDescription} placeholder="Another input placeholder" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input type="text" className="form-control" name="description" onChange={this.changeHandler} value={this.state.description} placeholder="Another input placeholder" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventDate">Event Date</label>
                            {/* <DatePicker selected={this.state.eventDate} onChange={this.handleChange} showTimeSelect dateFormat="Pp"/> */}
                            <DatePicker selected={this.state.eventDate} onChange={date => this.setState({eventDate : date})} showTimeSelect dateFormat="Pp" />
                        </div>
                        <div>
                            <label htmlFor="eventDate">Location</label>
                            <input type="text" required={true} className="form-control" name="location" onChange={this.changeHandler} value={this.state.location} placeholder="Another input placeholder" />
                        </div>
                        <div>
                            <label htmlFor="gcalender">Google Calender Link</label>
                            <input type="text" required={true} className="form-control" name="gcalender" onChange={this.changeHandler} value={this.state.gcalender} placeholder="Another input placeholder" />
                        </div>
                        <div>
                            <label htmlFor="gmaps">Google Maps embed link</label>
                            <input type="text" required={true} className="form-control" name="gmaps" onChange={this.changeHandler} value={this.state.gmaps} placeholder="Another input placeholder" />
                        </div>
                        <button type="submit" className="btn btn-success">Submit and Create Event</button>
                    </form>
                        <div>
                            <label htmlFor="event" className="upload-event-poster">Upload Event Poster</label>
                            {this.state.imageUploaded ? <p>Image uploaded</p> : <UplaodImage setImagePath={ path => this.setState({imgPath: path, imageUploaded: true}) }/> }
                        </div>
            </div>
        );
    }
}

export default CreateEvent;
