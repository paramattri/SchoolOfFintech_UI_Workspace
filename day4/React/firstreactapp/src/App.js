import './App.css';
import React, { Component } from 'react'
import Courses from './Courses';

class App extends Component {
 
 render(){

  return (
    <div className="App">
      <h1 className="display-4">Course List</h1>
      <br></br>
      <div className="container">
          <Courses message="Welcome"/>
        {/* <div className="row">
          <Teacher/>
        </div> */}
      </div>
    </div>
  );
 } 
}

export default App;
