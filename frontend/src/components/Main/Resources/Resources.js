import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resources.css';
import HashLoader from './AwesomeComponent';
import axios from 'axios';

class Resources extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      resources: []
    }
  }

  componentDidMount()
  {
    axios.get('/api/resourcedata/')
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
          <li>{resource.name}<br/><a rel="noopener noreferrer" href={`http://localhost:5000/upload/pdf/resource/${resource.pdfPath}`} target="_blank">Research Paper</a><br/><br/></li>
          )}
        </ul>
      </div>
      <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><ul>
        <li>14th annual meet at Shimla point.<br/><br/></li>
        <li>Seminar organised based on signals and systems.<br/><br/></li>
        <li>2nd Official SB meet under IEEE<br/><br/></li>
        <li>Anti AI takeover summit organised .<br/><br/></li>
        <li>14th annual meet at Shimla point.<br/><br/></li>
        <li>Seminar organised based on signals and systems.<br/><br/></li>
        <li>2nd Official SB meet under IEEE<br/><br/></li>
        <li>Anti AI takeover summit organised .</li></ul><br/><br/></div>
      <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><ul>
        <li><a rel="noopener noreferrer" href="https://">Hackathon organised by IEEE SB</a><br/><br/></li>
        <li><a rel="noopener noreferrer" href="https://">Coding competition organised by computer society , IEEE SB</a><br/><br/></li>
        <li><a rel="noopener noreferrer" href="https://">Anti AI takeover summit organised in which AI took over us.</a><br/><br/></li>
        <li><a rel="noopener noreferrer" href="https://">Some random event took place, IDK short of ideas</a><br/><br/></li>
        <li><a rel="noopener noreferrer" href="https://">Hackathon organised by IEEE SB</a><br/><br/></li>
        <li><a rel="noopener noreferrer" href="https://">Coding competition organised by computer society , IEEE SB</a><br/><br/></li>
        <li><a rel="noopener noreferrer" href="https://">Anti AI takeover summit organised in which AI took over us.</a><br/><br/></li>
        <li><a rel="noopener noreferrer" href="https://">Some random event took place, IDK short of ideas</a><br/><br/></li></ul></div>
      <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><ul>
        <li><a rel="noopener noreferrer" href="https://">IEEE</a><br/><br/></li>
        <li><a rel="noopener noreferrer" href="https://">IEEE SB</a><br/><br/></li>
        <li><a rel="noopener noreferrer" href="https://">IEEE Xplore</a><br/><br/></li>
        <li><a rel="noopener noreferrer" href="https://">IEEE link</a><br/><br/></li>
        <li><a rel="noopener noreferrer" href="https://">IEEE link</a><br/><br/></li>
        <li><a rel="noopener noreferrer" href="https://">IEEE link</a><br/><br/></li>
        <li><a rel="noopener noreferrer" href="https://">IIIT Ranchi</a><br/><br/></li>
        <li><a rel="noopener noreferrer" href="https://">Home</a><br/><br/></li></ul></div>
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
