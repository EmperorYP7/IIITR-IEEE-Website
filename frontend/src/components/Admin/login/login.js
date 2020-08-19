import React, { Component } from 'react';
import './login.css';
import ReactDOM from 'react-dom';
import Events from '../Events/Events';
import Members from '../Members/Members';
import Notices from '../Notices/Notices';
import Resources from '../Resources/Resources';
import Gallery from '../Gallery/Gallery';
import Conference from '../Resources/Conference';


class Login extends Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.login = this.login.bind(this);
        this.data = this.data.bind(this);

        this.state = {
            user: "",
            pass: "",
            user1: "21232f297a57a5a743894a0e4a801fc3",
            pass1 : "4f63e2a7118502d8eae77ecdd4eaf66f",
            auth : 0
        }
    }

    login = (e) => {
        e.preventDefault();
        const md5   = require("blueimp-md5");
        //console.log((this.state.pass1).localeCompare( (this.state.pass)));
        //const parsedUser = this.md5(this.state.user);
        // this.state.user = md5(this.state.user);
        // this.state.pass = md5(this.state.pass);
        if(((this.state.pass1).localeCompare(md5(this.state.pass)) === 0) && ((this.state.user1).localeCompare(md5(this.state.user)) === 0)){
            this.setState({auth : 1});
            ReactDOM.render(<div><h1 className="text-center">Admin Portal</h1><hr></hr></div>, document.getElementById('FillHere0'));
            ReactDOM.render(<Events/>, document.getElementById('FillHere2'));
            ReactDOM.render(<Notices/>, document.getElementById('FillHere3'));
            ReactDOM.render(<Members/>, document.getElementById('FillHere4'));
            ReactDOM.render(<Gallery/>, document.getElementById('FillHere5'));
            ReactDOM.render(<Resources/>, document.getElementById('FillHere6'));
            ReactDOM.render(<Conference/>, document.getElementById('FillHere7'));

        }
        else{
            ReactDOM.render(<div class="alert alert-danger mt-3" role="alert">
            Wrong username or Password !!
          </div>, document.getElementById('alert'));
        }

    }
    componentDidMount() {

    }
    data(){
        if(this.state.auth === 1){
            console.log("See");
            return <h1>There is itThere is itThere is itThere is itThere is itThere is itThere is it</h1>;
        }
    }

    changeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
        <div>
            
            <div id="FillHere0">
            <div id="alert"></div>
            <div className="container ">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-lg-5 col-md-8 login">
                    <div className="text-center h1">Admin Login</div><hr></hr>
                <form className="align-content-center" onSubmit={this.login}>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input type="text" required={true} className="form-control" name="user" onChange={this.changeHandler} placeholder="Enter username" value={this.state.user} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="designation">Password</label>
                        <input type="password" className="form-control" name="pass" onChange={this.changeHandler} value={this.state.pass} placeholder="Enter password" />
                    </div>
                    <div className="text-center"><button type="submit" className="btn btn-primary login-button">Log In</button></div>
                    
                </form>
                <p className="text-muted text-center mt-5 ">Web Team IIITRanchi © Copyright 2020
              </p>
                    </div>
                    
                </div>
                
            </div>
            </div>
            <div id="FillHere1"></div>
            <div id="FillHere2"></div>
            <div id="FillHere3"></div>
            <div id="FillHere4"></div>
            <div id="FillHere5"></div>
            <div id="FillHere6"></div>
            <div id="FillHere7"></div>


        </div>
        );
    }
}
export default Login;
