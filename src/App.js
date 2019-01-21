import React, { Component } from 'react';

import './App.css';
import TodoList from "./TodoList/TodoList";
import MadLibs from "./MadLibs/MadLibs"
import MadLib3 from "./MadLibs/MadLib3"
import MemeGen from "./MemeGenerator/MemeGen"
import MadLib2 from "./MadLibs/MadLib2";
class App extends Component {
  render() {
    return (
      <div>
         <MadLib2/>
      </div>
    );
  }
}

export default App;
