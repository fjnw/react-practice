import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Testing react app</h1>
        <Person name="Max" age="28" />
        <Person name="Adam" age="40">Props children</Person>
        <Person name="Jess" age="18"/>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Hi, I\'m an element'));
  }
}

export default App;
