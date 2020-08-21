import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resources.css';
import HashLoader from '../AwesomeComponent';
import axios from 'axios';

class Resources extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      resources: [],
      conferences: []
    }
  }

  componentDidMount()
  {
    axios.get('https://ieeemock2.azurewebsites.net/api/resourcedata/')
        .then(res => {
          this.setState({ resources: res.data });
          if(res.data>0){
          this.setState({loaded:true});
          }
          else{
          this.setState({loaded:true});
          }
        })
        .catch(err => console.log("Error" + err));
  axios.get('https://ieeemock2.azurewebsites.net/api/conferencedata/')
        .then(res => {
          this.setState({ conferences: res.data });
          if(res.data>0){
          this.setState({loaded:true});
          }
          else{
          this.setState({loaded:true});
          }
        })
        .catch(err => console.log("Error" + err));
  }

    render() {
    if(this.state.loaded){
        return (
            <div className="container ">
                <div className="row resources-container">
                    <div className="col-12 resources-header text-center"><h2>RESOURCES</h2><hr></hr></div>

  <div className="col-4 col-sm-3">
    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" rel="noopener noreferrer" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><b>RESEARCH</b></a>
      <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" rel="noopener noreferrer" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><b>CONFERENCE</b></a>
      <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" rel="noopener noreferrer" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><b>LINKS</b></a>
      <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" rel="noopener noreferrer" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><b>MORE LINKS</b></a>
    </div>
  </div>
  <div className="col-8 col-sm-9">
    <div className="tab-content" id="v-pills-tabContent">
      <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
        <ul>
          {this.state.resources.map( resource =>
          <li key={resource._id}>{resource.name}<br/><a rel="noopener noreferrer" href={`https://ieeemock2.azurewebsites.net/upload/pdf/resource/${resource.pdfPath}`} target="_blank">Research Paper</a><br/><br/></li>
          )}
        </ul>
      </div>
      <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><ul>
      {this.state.conferences.map( conferences =>
          <li key={conferences._id}>{conferences.name}<br/><a rel="noopener noreferrer" href={`${conferences.link}`} target="_blank">{conferences.link}</a><br/><br/></li>
          )}</ul><br/><br/></div>
      <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><ul>
        <li><a rel="noopener noreferrer" target = "_blank" href="https://www.ieee.org">IEEE</a><br/><br/></li>
        <li><a rel="noopener noreferrer" target = "_blank" href="https://www.ieee.org">IEEE Xplore</a><br/><br/></li>
        <li><a rel="noopener noreferrer" target = "_blank" href="https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join">Join IEEE</a><br/><br/></li>
        <li><a rel="noopener noreferrer" target = "_blank" href="https://standards.ieee.org/?_ga=2.144225589.1899340415.1597844769-1998724759.1594983260">IEEE Standards Association</a><br/><br/></li>
        <li><a rel="noopener noreferrer" target = "_blank" href="https://spectrum.ieee.org/">IEEE Spectrum</a><br/><br/></li>
        <li><a rel="noopener noreferrer" target = "_blank" href="https://www.iiitranchi.ac.in">IIIT Ranchi</a><br/><br/></li></ul></div>
      <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><ul>
        <li><a rel="noopener noreferrer" target = "_blank" href="https://www.google.com">Google</a><br/><br/></li></ul></div>
    </div>

</div>

                </div>

            </div>
        );
}
else{
if(!this.state.loaded){
return(
  <div className="loader"><HashLoader message="Hold Tight!" /></div>

)
}
}
    }
}

export default Resources;
