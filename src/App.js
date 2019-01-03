import React, { Component } from 'react';
import './App.css';
import TodoList from "./TodoList/TodoList";
import MadLibs from "./MadLibs/MadLibs"
import MadLib2 from "./MadLibs/MadLib2"
import MadLib3 from "./MadLibs/MadLib3"

class App extends Component {
  render() {
    return (
      <div>
			<h1>Mad Libs </h1>
         <MadLib3 />
      </div>
    );
  }
}

export default App;
