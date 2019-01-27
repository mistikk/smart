import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header/header.view';
import Product from './containers/product';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/:id" exact component={Product} />
        </div>
      </Router>

    );
  }
}

export default App;
