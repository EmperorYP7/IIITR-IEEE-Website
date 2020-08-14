import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import ImageUploader from './ImageUploader';

class CreateMember extends React.Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.handleMemberAdd = this.handleMemberAdd.bind(this);

        this.state = {
            name: '',
            designation: '',
            shortDescription: '',
        }
    }
    componentDidMount() {
        
    }

    handleMemberAdd = (e) => {
        e.preventDefault();
        const member = {
            name: this.state.name,
            designation: this.state.designation,
            shortDescription: this.state.shortDescription,
            linkedinLink: this.state.linkedinLink,
            facebookLink: this.state.facebookLink,
            emailid: this.state.emailid,
            githubLink: this.state.githubLink
        }
        axios.post(`/api/memberdata/`, member)
            .then(res => {
                this.setState({
                    name: '',
                    designation: '',
                    shortDescription: '',
                    linkedinLink: '',
                    facebookLink: '',
                    emailid: '',
                    githubLink: ''
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

    render() {
        return (
            <div className="col-lg-6 col-md-12">
                <div className="display-4 align-content-center">Add New Member</div>
                <form className="col-6 align-content-center" onSubmit={this.handleMemberAdd}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" required={true} className="form-control" name="name" onChange={this.changeHandler} placeholder="Name of new member" value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="designation">designation</label>
                        <input type="text" className="form-control" name="designation" onChange={this.changeHandler} value={this.state.designation} placeholder="Designation of new member" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="shortDescription">Short Description</label>
                        <input type="text" required={true} className="form-control" name="shortDescription" onChange={this.changeHandler} value={this.state.shortDescription} placeholder="Describe briefly" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="linkedinLink">LinkedIn Link</label>
                        <input type="text" required={true} className="form-control" name="linkedinLink" onChange={this.changeHandler} value={this.state.linkedinLink} placeholder="Describe briefly" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="githubLink">GitHub Link</label>
                        <input type="text" required={true} className="form-control" name="githubLink" onChange={this.changeHandler} value={this.state.githubLink} placeholder="Describe briefly" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailid">Email ID</label>
                        <input type="text" required={true} className="form-control" name="emailid" onChange={this.changeHandler} value={this.state.emailid} placeholder="Describe briefly" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="facebookLink">Facebook Link</label>
                        <input type="text" required={true} className="form-control" name="facebookLink" onChange={this.changeHandler} value={this.state.facebookLink} placeholder="Describe briefly" />
                    </div>
                    <div>
                        <ImageUploader />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Member</button>
                </form>
            </div>
        );
    }
}

export default CreateMember;