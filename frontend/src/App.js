import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Admin from './components/Admin/Admin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;