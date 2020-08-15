import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Container, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CreateNotice from './CreateNotice'

class Notices extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notices: [],
        }
    }

    UpdateState = () => {
        axios.get(`/api/noticedata/`)
        .then(res => {
            this.setState({
                ...this.state,
                notices: res.data
            });
            console.log("New set of notices Fetched");
        })
        .catch(err => console.log("Error" + err));
    }

    componentDidMount() {
        this.UpdateState();
    }

    onNoticeDelete = (_id) => {
        axios.delete(`/api/noticedata/${_id}`)
            .then(res => {
                alert("notice Deleted!");
                this.UpdateState();
            })
    }

    render() {
        return (

            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="display-4 align-content-center">Notices</div>
                    <Container>
                        <ListGroup>
                            <TransitionGroup className="notice-list">
                                {this.state.notices.map(({ _id, name }) => (
                                    <CSSTransition key={_id} timeout={600} classNames='fade'>
                                        <ListGroupItem>
                                            <div className="row list-item">
                                                <div className="col-10">
                                                    {name}
                                                </div>
                                                <div className="col-1">
                                                    <Button className='remove-btn' color='danger' size='sm'
                                                        onClick={this.onNoticeDelete.bind(this, _id)} >
                                                        <i className="fa fa-trash" aria-hidden="true"> Delete  </i>
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
            
                <CreateNotice UpdateState ={this.UpdateState} />

            </div>
        );
    }
}

export default Notices;
