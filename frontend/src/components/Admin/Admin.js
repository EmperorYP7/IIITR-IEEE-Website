import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './Events/Events';
import Members from './Members/Members';
import Login from './login/login';
import './Admin.css';

class Admin extends Component {

    render() {
        return (
            <div className="container bg-nmg">
                
                <Login/>
        {/*console.log(this.props)*/}
                
            </div>
        );
    }
}

export default Admin;