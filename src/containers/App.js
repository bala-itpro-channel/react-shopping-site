import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';
import Products from './../components/Products/Products.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>E-Com website - Demo</span>
        </header>
        <div>
          Here is the product list.
  
          <Products category="Cosmetics" />
        </div>
      </div>
    );
  }

}

export default App;
