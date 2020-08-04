import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Events.css';

class Events extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="card w-75">
                    <div className="card-body">
                        <h5 className="card-title">Present Events</h5>
                        <div className="card-text">
                        {this.state.present.map(post =>{return(<div>
                                <div className="card w-100">
                                    <div className="card-body">
                                        <p className="card-text">
                                            Title: {post.Title}<br/><br/>
                                            Date: {post.Date}<br/><br/>
                                            Details: {post.Details} <br/><br/>
                                            <a className= "btn btn-success" href={post.Form} >Register</a>
                                        </p>
                                    </div>
                                </div><br/>
                        </div>);})}        
                        </div>
                    </div>
                </div><br/>
            </React.Fragment>                    
        );
    }
}

export default Events;