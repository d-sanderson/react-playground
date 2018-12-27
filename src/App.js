import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu/Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             This is my <p className="react"> react </p> playground
          </p>
        </header>
			<Menu />
      </div>
    );
  }
}

export default App;
