import React from 'react';
import './Main.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import EventList from './Events/EventList';
import Event from './Events/Event';
import Gallery from './Gallery/Gallery';
import Members from './Members/Members';
import Resources from './Resources/Resources';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Main() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <div className="render">
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/events" exact component={EventList} />
            <Route path="/events/:slug" exact urlString ={"/events/:slug"} component={Event} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/members" component={Members} />
            <Route path="/resources" component={Resources} />
        </Switch>
          </div>
      <Footer />
      </Router>
    </div>
  );
}

export default Main;
