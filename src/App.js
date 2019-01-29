import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';

import Header from './components/header/header.view';
import Product from './containers/product';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/:id" exact component={Product} />
            <Redirect from="/" to="/error" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
