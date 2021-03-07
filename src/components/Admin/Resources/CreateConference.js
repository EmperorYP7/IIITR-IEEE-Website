import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

class CreateConference extends React.Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.handleConferenceAdd = this.handleConferenceAdd.bind(this);

        this.state = {
            name: '',
            link: '',
        }
    }
    componentDidMount() {

    }

    handleConferenceAdd = (e) => {
        e.preventDefault();
        const conference = {
            name: this.state.name,
            link: this.state.link
        }
        axios.post(`/api/conferencedata/`, conference, {
            headers: {
                authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
        })
            .then(res => {
                this.setState({
                    name: '',
                    link: ''
                });
                this.props.UpdateState();
                alert("Conference Created!");
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

    render() {
        return (
            <div className="col-lg-6 col-md-12">
                <div className="display-4 align-content-center">Add New Conference</div>
                <form className="col-12 align-content-center" onSubmit={this.handleConferenceAdd}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" required={true} className="form-control" name="name" onChange={this.changeHandler} placeholder="Name of new conference" value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="link">Recorded Video link </label>
                        <input type="text" className="form-control" name="link" onChange={this.changeHandler} value={this.state.link} placeholder="Recorded video link" />
                    </div>
                    <button type="submit" className="btn btn-success">Add Conference</button>
                </form>
                
            </div>
        );
    }
}

export default CreateConference;
