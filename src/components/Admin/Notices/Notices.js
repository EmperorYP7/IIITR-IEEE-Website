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

    onNoticeDelete = (notice) => {
        axios.delete(`/api/noticedata/${notice._id}`, {
            headers: {authorization: `Bearer ${window.localStorage.getItem("token")}`,}
        })
            .then(res => {
                alert("notice Deleted!");
                this.UpdateState();
            })
        axios.delete(`/upload/pdf/notice/${notice.pdfName}`, {
            headers: {authorization: `Bearer ${window.localStorage.getItem("token")}`,}
        })
        .then(  res => {
            console.log(res.data);
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
                                {this.state.notices.map((notice) => (
                                    <CSSTransition key={notice._id} timeout={600} classNames='fade'>
                                        <ListGroupItem>
                                            <div className="row list-item">
                                                <div className="col-10">
                                                    {notice.name}
                                                </div>
                                                <div className="col-1">
                                                    <Button className='remove-btn btn btn-danger' color='danger' size='sm'
                                                        onClick={this.onNoticeDelete.bind(this, notice)} >
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
