import React, { Component } from 'react';
import './App.css';
import TodoList from "./TodoList/TodoList";
import MadLibs from "./MadLibs/MadLibs"

class App extends Component {
  render() {
    return (
      <div>
        <MadLibs />
      </div>
    );
  }
}

export default App;
