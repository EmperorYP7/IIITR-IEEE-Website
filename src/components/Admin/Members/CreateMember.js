import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import UploadProfilePic from './UploadProfilePic';

class CreateMember extends React.Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.handleMemberAdd = this.handleMemberAdd.bind(this);

        this.state = {
            name: '',
            designation: '',
            order: 0,
            shortDescription: '',
            linkedinLink: '',
            facebookLink: '',
            emailid: '',
            githubLink: '',
            imgPath: '',
            imgName: '',
            imageUploaded: false
        }
    }
    componentDidMount() {

    }

    handleMemberAdd = (e) => {
        e.preventDefault();
        if(!this.state.imageUploaded)
        {
            alert("Please upload Profile Picture");
            return;
        }
        const member = {
            name: this.state.name,
            order: this.state.order,
            designation: this.state.designation,
            shortDescription: this.state.shortDescription,
            linkedinLink: this.state.linkedinLink,
            facebookLink: this.state.facebookLink,
            emailid: this.state.emailid,
            githubLink: this.state.githubLink,
            imgPath: this.state.imgPath
        }
        axios.post(`/api/memberdata/`, member)
            .then(res => {
                this.setState({
                    name: '',
                    order: 0,
                    designation: '',
                    shortDescription: '',
                    linkedinLink: '',
                    facebookLink: '',
                    emailid: '',
                    githubLink: '',
                    imgPath: '',
                    imageUploaded: false
                });
                this.props.UpdateState();
                alert("Member Added");
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
                <form className="col-12 align-content-center" onSubmit={this.handleMemberAdd}>
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
                    <button type="submit" className="btn btn-success">Add Member</button>
                </form>
                    <div>
                        <label htmlFor="event" className="upload-event-poster">Upload Profile Picture</label>
                    {this.state.imageUploaded ? <p>Image uploaded</p> : <UploadProfilePic setImagePath={(path) => this.setState({ imgPath: path, imageUploaded: true })} setImageName={ (name) => this.setState({ imgName: name })}/> }
                    </div>
            </div>
        );
    }
}

export default CreateMember;
