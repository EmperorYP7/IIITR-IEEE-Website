import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Container, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Members.css';
import CreateMember from './CreateMember';

class Members extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            members : [],
        }
    }

    UpdateState = () => {
        axios.get(`/api/memberdata/`)
        .then(res => {
            this.setState({
                ...this.state,
                members: res.data
            });
            console.log("New set of members Fetched");
        })
        .catch(err => console.log("Error" + err));
    }

    componentDidMount() {
        this.UpdateState();
    }

    onMemberDelete = (member) => {
        axios.delete(`/api/memberdata/${member._id}`)
            .then(res => {
                alert("Member Removed!");
                this.UpdateState();
            })
        axios.delete(`/upload/image/member/${member.imgName}`)
            .then(  res => {
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="display-4 align-content-center">Members</div>
                    <Container>
                        <ListGroup>
                            <TransitionGroup className="member-list">
                                {this.state.members.map((member) => (
                                    <CSSTransition key={member._id} timeout={600} classNames='fade'>
                                        <ListGroupItem>
                                            <div className="row list-item">
                                                <div className="col-10">
                                                    {member.name}
                                                </div>
                                                <div className="col-2 ">
                                                    <Button className='remove-btn btn btn-danger' color='danger' size='sm'
                                                        onClick={this.onMemberDelete.bind(this, member)} >
                                                        <i className="fa fa-trash" aria-hidden="true"> Remove</i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </ListGroupItem>
                                    </CSSTransition>
                                ))}
                            </TransitionGroup>
                        </ListGroup>
                    </Container>
                </div>

                <CreateMember UpdateState ={this.UpdateState} />

            </div>
        );
    }
}

export default Members;
