import React, { Component } from 'react';
import './login.css';
import ReactDOM from 'react-dom';
import Events from '../Events/Events';
import Members from '../Members/Members';
import Gallery from '../Gallery/Gallery';

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

        console.log(this.state.user,this.state.user1,this.state.pass,this.state.pass1);
        if(((this.state.pass1).localeCompare(md5(this.state.pass)) === 0) && ((this.state.user1).localeCompare(md5(this.state.user)) === 0)){
            this.setState({auth : 1});
            ReactDOM.render(<hr/>, document.getElementById('FillHere1'));
            ReactDOM.render(<Gallery/>, document.getElementById('FillHere4'));
            ReactDOM.render(<Events/>, document.getElementById('FillHere2'));
            ReactDOM.render(<Members/>, document.getElementById('FillHere3'));
        }
        else{
            ReactDOM.render(<h1>Wrong Username or Password</h1>, document.getElementById('FillHere1'));
        }
        console.log("SUCCESS",this.state.auth);

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
            <div className="col-lg-6 col-md-12">
                <div className="display-4 align-content-center">Admin Login</div><br/><br/>
                <form className="col-6 align-content-center" onSubmit={this.login}>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input type="text" required={true} className="form-control" name="user" onChange={this.changeHandler} placeholder="Enter username" value={this.state.user} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="designation">Password</label>
                        <input type="password" className="form-control" name="pass" onChange={this.changeHandler} value={this.state.pass} placeholder="Enter password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Log In</button>
                </form>
            </div>
            <div id="FillHere1"></div>
            <div id="FillHere2"></div>
            <div id="FillHere3"></div>
            <div id="FillHere4"></div>

        </div>
        );
    }
}
export default Login;
