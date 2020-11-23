import './App.css';
import React, { Component } from 'react'
import Courses from './Courses';
import Student from './Student';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

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
        {/* <Router>

        <Route path='/' component={}></Route>
        <Student/>

        </Router> */}
      </div>
    </div>
  );
 } 
}

export default App;
