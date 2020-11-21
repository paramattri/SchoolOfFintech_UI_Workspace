import './App.css';
import React, { Component } from 'react'
import Course from './courses';
import Teacher from './teacher';

class App extends Component {
 
 render(){

  return (
    <div className="App">
      <h1 className="display-4">Welcome to React</h1>
      <br></br>
      <div className="container">
        <div className="row">
          <Course message="Welcome"/>
        </div>
        <div className="row">
          <Teacher/>
        </div>
      </div>
    </div>
  );
 } 
}

export default App;
