import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Members.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
import Pandey from './images/pandey.jpeg';

class Members extends Component {

    constructor(props) {
        super(props);

        this.state = { members: [] };
    }
    componentDidMount() {
        axios.get(`/api/memberdata`)
            .then(res => {
                this.setState({ members: res.data });
            })
            .catch(err => console.log("Error" + err));
    }

    render() {
        const showMember = this.state.members.map((member) => {
            return (
                <div >
                <Card>
                    <Card.Img variant="top" className="img" src={Pandey} />
                    <div className="img-overlay col-12 hide">
                        <a className=" btn text-white" rel="noopener noreferrer" href={member.linkedinLink} target="_blank"><i className="fab fa-linkedin fa-2x"></i></a>
                        <a className=" btn text-white" rel="noopener noreferrer" href={member.githubLink} target="_blank"><i className="fab fa-github-square fa-2x"></i></a>
                        <a className=" btn text-white" rel="noopener noreferrer" href={member.emailid} target="_blank"><i className="fas fa-envelope fa-2x"></i></a>
                        <a className=" btn text-white" rel="noopener noreferrer" href={member.facebookLink} target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
                    </div>
                    <Card.Body className="card-body">
                        <Card.Title>{member.name}</Card.Title>
                        <Card.Subtitle className="text-muted">{member.designation}</Card.Subtitle>
                        <Card.Text>
                        {member.shortDescription}{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                        <Button className="button ">Read More</Button> {/* Link needs to be added*/}
                        </small>
                    </Card.Footer>
                </Card>
                </div>

            );
        });
        return (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center member-header">
                            <h2>Member Type 1</h2>
                            <hr></hr>
                        </div>
                        <div className="col-12">
                        <CardColumns className="card-group row justify-content-center">
                            {showMember}
                        </CardColumns>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Members;
