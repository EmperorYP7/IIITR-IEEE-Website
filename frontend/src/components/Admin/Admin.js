import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login/login';
import './Admin.css';

class Admin extends Component {

    render() {
        return (
            <div className="container">
                <Login/>
            </div>
        );
    }
}

export default Admin;
