import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './Events/Events';
import Members from './Members/Members';
import './Admin.css';

class Admin extends Component {

    render() {
        return (
            <div className="container-fluid bg-nmg">
                <Events/>
                <hr/>
                <Members/>
            </div>
        );
    }
}

export default Admin;
