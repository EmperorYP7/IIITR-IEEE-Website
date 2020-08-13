import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import ImageUploader from './ImageUploader';
import "react-datepicker/dist/react-datepicker.css";

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
            gcalender: ''
        };
    }
    componentDidMount() {

    }

    handleEventSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        const event = {
            title: this.state.title,
            description: this.state.description,
            shortDescription: this.state.shortDescription,
            eventDate: this.state.eventDate,
            location: this.state.location,
            gcalender: this.state.gcalender,
            gmaps: this.state.gmaps
        }
        console.log(event);
        axios.post(`/api/eventdata/`, event)
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
                    imgPath: ''
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
      };

    render() {
        return (
            <div className="col-lg-6 col-md-12">
                <div className="display-4 align-content-center">Create New Event</div>
                <ImageUploader />
                <form className="col-6 align-content-center" onSubmit={this.handleEventSubmit}>
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
                    <div className='container mt-4'>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateEvent;
