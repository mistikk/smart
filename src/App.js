import React, { Component } from 'react';

import './App.css';

import Header from './components/header/header.view';
import Product from './containers/product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Product />
      </div>
    );
  }
}

export default App;
