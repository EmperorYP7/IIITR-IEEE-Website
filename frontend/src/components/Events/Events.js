import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Events.css';

var today = new Date();                                 //Some code to get today's date
var dd = String(today.getDate()).padStart(2, '0');      //
var mm = String(today.getMonth() + 1).padStart(2, '0'); //
var yyyy = today.getFullYear();                         //
today = yyyy+mm+dd;                                     //The variable today stores date in yyyymmdd format
console.log("Today:",today);            

//Note: The date for the events stored in database must be strictly in dd-mm-yyyy format

//Data entered below in variable data would normally be obtained from mongoDB database
var data=[{     'Title': 'Random Event 1',
            'Date': '01-08-2020',
            'Details': 'Sabko aana hai matlab aana hai. Sabse parade karwaaya jaayega.',
            'Form': 'https://form1'
            },
            {
            'Title': 'Random Event 2',
            'Date': '02-08-2020',
            'Details': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur ',                    
            'Form' : 'https://form2'
            },
            {
            'Title': 'Random Event 3',
            'Date':'03-08-2020',
            'Details': 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
            'Form' : 'https://form3'                        
            }
            
        ];


//console.log(today,"\n",data[0].Date.substring(6,data[0].Date.length)+data[0].Date.substring(3,5)+data[0].Date.substring(0,2));        //date debug

var PresentData = data.filter(function(x){return (x.Date.substring(6,x.Date.length)+x.Date.substring(3,5)+x.Date.substring(0,2)).localeCompare(today)===0 });       //Filters data to get JSON array of present events
var UpcomingData = data.filter(function(x){return Number(x.Date.substring(6,x.Date.length)+x.Date.substring(3,5)+x.Date.substring(0,2)) > Number(today) });         //Filters data to get JSON array of upcoming events
var PastData = data.filter(function(x){return Number(x.Date.substring(6,x.Date.length)+x.Date.substring(3,5)+x.Date.substring(0,2)) < Number(today) });             //Filters data to get JSON array of past events

console.log("Present Events:\n",PresentData);       //debug statement for present events
console.log("Upcoming Events:\n",UpcomingData);      //debug statement for upcoming events
console.log("Past Events:\n",PastData);          //debug statement for past events


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


                <div className="card w-75">
                    <div className="card-body">
                        <h5 className="card-title">Upcoming Events</h5>
                        <div className="card-text">
                        {this.state.upcoming.map(post =>{return(<div>
                                <div className="card w-100">
                                    <div className="card-body">
                                        <p className="card-text">
                                            Title: {post.Title}<br/><br/>
                                            Date: {post.Date}<br/><br/>
                                            Details: {post.Details} <br/><br/>
                                            <a className= "btn btn-success" href={post.Form}>Register</a>
                                        </p>
                                    </div>
                                </div><br/>
                        </div>);})}
                        </div>
                    </div>
                </div><br/>


                <div className="card w-75">
                    <div className="card-body">
                        <h5 className="card-title">Past Events</h5>
                        <div className="card-text">
                        {this.state.past.map(post =>{return(<div>
                                <div className="card w-100">
                                    <div className="card-body">
                                        <p className="card-text">
                                            Title: {post.Title}<br/><br/>
                                            Date: {post.Date}<br/><br/>
                                            Details: {post.Details} <br/><br/>
                                            <a className= "btn btn-success" href={post.Form}>Register</a>
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