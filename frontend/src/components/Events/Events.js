import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Events.css';


class Events extends Component {
    constructor(props)
    {
        super(props);
    this.state={
        present:[{  'Title': 'Random Event 1',
                    'Date': '20-20-2020',
                    'Details': 'Sabko aana hai matlab aana hai. Sabse parade karwaaya jaayega.'
                },
                {
                    'Title': 'Random Event 2',
                    'Date': '10-10-2020',
                    'Details': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur '                       
                },
                {
                    'Title': 'Random Event 3',
                    ' Date':'30-30-3030',
                    'Details': 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum '
                                            
                }],
        upcoming:[
                    'None'
                ],
        past:[{  'Title': 'Random Event 1',
                    'Date': '20-20-2020',
                    'Details': 'Sabko aana hai matlab aana hai. Sabse parade karwaaya jaayega.'
                },
                {
                    'Title': 'Random Event 2',
                    'Date': '10-10-2020',
                    'Details': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur '                       
                },
                {
                    'Title': 'Random Event 3',
                    ' Date':'30-30-3030',
                    'Details': 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum '
                                            
                }]
            }
    };
    render() {
        return (
            <React.Fragment>
                {
                    console.log(this.state.present[0].Title,'\n', this.state.present[0].Date,'\n', this.state.present[0].Details)
                }
                <div className="card w-75">
                    <div className="card-body">
                        <h5 className="card-title">Present Events</h5>
                        <p className="card-text">
                                <div className="card w-100">
                                    <div className="card-body">
                                        <p className="card-text">
                                            Title: Random Event 1<br/><br/>
                                            Date: 20-20-2020<br/><br/>
                                            Details: Sabko aana hai matlab aana hai. Sabse parade karwaaya jaayega. <br/><br/>
                                            <button className= "btn btn-success" onClick="location.href=''">Register</button>
                                        </p>
                                    </div>
                                </div><br/>
                                <div className="card w-100">
                                    <div className="card-body">
                                        <p className="card-text">
                                            Title: Random Event 2<br/><br/>
                                            Date: 10-10-2020<br/><br/>
                                            Details: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur 
                                            <br/><br/>
                                            <button className= "btn btn-success" onClick="location.href=''">Register</button>
                                        </p>
                                    </div>
                                </div><br/>
                                <div className="card w-100">
                                    <div className="card-body">
                                        <p className="card-text">
                                            Title: Random Event 3<br/><br/>
                                            Date: 30-30-3030<br/><br/>
                                            Details: Lorem ipsum dolor sit amet, consectetur adi
                                            piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
                                            <br/><br/>
                                            <button className= "btn btn-success" onClick="location.href=''">Register</button>
                                        </p>
                                    </div>
                                </div><br/>
                        </p>
                    </div>
                </div><br/>
                <div className="card w-75">
                    <div className="card-body">
                        <h5 className="card-title">Upcoming Events</h5>
                        <p className="card-text">
                                Would be Updated Soon................
                        </p>
                    </div>
                </div><br/>
                
                <div className="card w-75">
                    <div className="card-body">
                        <h5 className="card-title">Past Events</h5>
                        <p className="card-text">
                                <div className="card w-100">
                                    <div className="card-body">
                                        <p className="card-text">
                                            Title: Random Event 1<br/><br/>
                                            Date: 20-20-2020<br/><br/>
                                            Details: Sabko aana hai matlab aana hai. Sabse parade karwaaya jaayega. 
                                            <br/><br/>
                                            <button className= "btn btn-success" onClick="location.href=''">Register</button>
                                        </p>
                                    </div>
                                </div><br/>
                                <div className="card w-100">
                                    <div className="card-body">
                                        <p className="card-text">
                                            Title: Random Event 2<br/><br/>
                                            Date: 10-10-2020<br/><br/>
                                            Details: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur 
                                            <br/><br/>
                                            <button className= "btn btn-success" onClick="location.href=''">Register</button>
                                        </p>
                                    </div>
                                </div><br/>
                                <div className="card w-100">
                                    <div className="card-body">
                                        <p className="card-text">
                                            Title: Random Event 3<br/><br/>
                                            Date: 30-30-3030<br/><br/>
                                            Details: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
                                            <br/><br/>
                                            <button className= "btn btn-success" onClick="location.href=''">Register</button>
                                        </p>
                                    </div>
                                </div><br/>
                        </p>
                    </div>
                
                </div><br/>
        </React.Fragment>
        );
    }
}

export default Events;