import React, { Component } from 'react';

import './App.css';

import Product from './containers/product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Product />
      </div>
    );
  }
}

export default App;
