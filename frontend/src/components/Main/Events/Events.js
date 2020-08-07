import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Events.css';
import data from './EventData.json'




//For date thing, start changes in this block
//{
var today = new Date();                                 //Some code to get today's date
var dd = String(today.getDate()).padStart(2, '0');      //
var mm = String(today.getMonth() + 1).padStart(2, '0'); //
var yyyy = today.getFullYear();                         //
today = yyyy+mm+dd;                                     //The variable today stores date in yyyymmdd format
//console.log("Today:",today);            
//Note: The date for the events stored in database must be strictly in dd-mm-yyyy format
var PresentData = data.filter(function(x){return (x.Date.substring(6,x.Date.length)+x.Date.substring(3,5)+x.Date.substring(0,2)).localeCompare(today)===0 });       //Filters data to get JSON array of present events
var UpcomingData = data.filter(function(x){return Number(x.Date.substring(6,x.Date.length)+x.Date.substring(3,5)+x.Date.substring(0,2)) > Number(today) });         //Filters data to get JSON array of upcoming events
var PastData = data.filter(function(x){return Number(x.Date.substring(6,x.Date.length)+x.Date.substring(3,5)+x.Date.substring(0,2)) < Number(today) });             //Filters data to get JSON array of past events
//}
//Upto here. make proper array filtering for present past and upcoming variables as above so that rendered properly




//console.log("Present Events:\n",PresentData);       //debug statement for present events
//console.log("Upcoming Events:\n",UpcomingData);      //debug statement for upcoming events
//console.log("Past Events:\n",PastData);          //debug statement for past events


class Events extends Component {
    constructor(props)
    {
        super(props);
    this.state={
        present:PresentData,        //Obtained from above
        upcoming:UpcomingData,      //Obtained from above
        past:PastData               //Obtained from above
            }
    };
    render() {
        return (
            <React.Fragment>
                <div id="cardEx" className="card w-75">                              {/*Present Events Rendering*/}
                    <div className="card-body">
                        <h4 className="card-title">Present Events</h4>              
                        <div className="card-text">
                        {this.state.present.map(post =>{return(<div>
                                <div id="card" className="card w-100">
                                    <div className="card-body">
                                        <p className="card-text">
                                            Title: {post.Name}<br/><br/>
                                            Date: {post.Date}<br/><br/>
                                            Details: {post.Details} <br/><br/>
                                            <a className= "btn btn-success" href={post.Form} >Register</a>
                                        </p>
                                    </div>
                                </div>
                        </div>);})}        
                        </div>
                    </div>
                </div><br/>


                <div id="cardEx" className="card w-75">                              {/*Upcoming Events Rendering*/}
                    <div className="card-body">
                        <h4 className="card-title">Upcoming Events</h4>
                        <div className="card-text">
                        {this.state.upcoming.map(post =>{return(<div>
                                <div id="card" className="card w-100">
                                    <div className="card-body">
                                        <p className="card-text">
                                            Title: {post.Name}<br/><br/>
                                            Date: {post.Date}<br/><br/>
                                            Details: {post.Details} <br/><br/>
                                            <a className= "btn btn-success" href={post.Form}>Register</a>
                                        </p>
                                    </div>
                                </div>
                        </div>);})}
                        </div>
                    </div>
                </div><br/>


                <div id="cardEx" className="card w-75">                                {/*Past Events Rendering*/}
                    <div className="card-body">
                        <h4 className="card-title">Past Events</h4>
                        <div className="card-text">
                        {this.state.past.map(post =>{return(<div>
                                <div id="card" className="card w-100">
                                    <div className="card-body">
                                        <p className="card-text">
                                            Title: {post.Name}<br/><br/>
                                            Date: {post.Date}<br/><br/>
                                            Details: {post.Details} <br/><br/>
                                            <a className= "btn btn-success" href={post.Form}>Register</a>
                                        </p>
                                    </div>
                                </div>
                        </div>);})}
                        </div>
                    </div>
                
                </div><br/>
        </React.Fragment>
        );
    }
}

export default Events;