import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Admin extends React.Component {
    constructor()
    {
        super();
        this.state = {
                title: '',
                description: '',
                shortDescription: '',
                eventDate: '',
                location: ''
        }
    }

    componentDidMount()
    {
        axios.get('/api/eventdata/new')
            .then(res => {
                this.setState({ event: res.event });
                console.log('Recieved!', res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/api/eventdata`, { event: this.state })
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

    render() {
        const { title,
        description,
        shortDescription,
        eventDate,
        location } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" name="title" onChange={this.changeHandler} placeholder="Example input placeholder" value= {title} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="shortDescription">Short Description</label>
                        <input type="text" className="form-control" name="shortDescription" onChange={this.changeHandler} value={shortDescription} placeholder="Another input placeholder" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" name="description" onChange={this.changeHandler} value={description} placeholder="Another input placeholder" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventDate">Event Date</label>
                        <input type="Date" className="form-control" name="eventDate" onChange={this.changeHandler} value={eventDate} placeholder="Another input placeholder" />
                    </div>
                    <div>
                    <label htmlFor="eventDate">Location</label>
                        <input type="text" className="form-control" name="location" onChange={this.changeHandler} value={location} placeholder="Another input placeholder" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Admin;
