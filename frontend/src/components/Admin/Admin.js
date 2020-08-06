import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


class Admin extends React.Component {
    constructor(props)
    {
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.OnChangeDate = this.OnChangeDate.bind(this);

        this.state = {
                title: '',
                description: '',
                shortDescription: '',
                eventDate: new Date(),
                location: ''
        }
    }

    componentDidMount()
    {
        
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const event = {
                title: this.state.title,
                description: this.state.description,
                shortDescription: this.state.shortDescription,
                eventDate: this.state.eventDate,
                location: this.state.location
        }

        axios.post(`/api/eventdata/`, event)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    };

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    OnChangeDate = (date) => {
        this.setState( { eventDate: date } );
    }

    render() {
        return (
            <div className="container row">
                <div className="display-4 align-content-center">Create New Event</div>
                <form className="col-6 align-content-center" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" required={true} className="form-control" name="title" onChange={this.changeHandler} placeholder="Example input placeholder" value= {this.state.title} />
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
                        <DatePicker selected={this.state.eventDate} onChange={this.onChangeDate} />
                    </div>
                    <div>
                    <label htmlFor="eventDate">Location</label>
                        <input type="text" required={true} className="form-control" name="location" onChange={this.changeHandler} value={this.state.location} placeholder="Another input placeholder" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Admin;
