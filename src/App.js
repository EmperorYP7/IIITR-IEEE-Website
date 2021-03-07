import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Admin from './components/Admin/Admin';
import ProtectedRoute from "./components/Admin/ProtectedRoute/ProtectedRoute";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <ProtectedRoute path="/admin" exact component={Admin} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;