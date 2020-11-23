import React, { Component } from 'react'

export default class Course extends Component {

    heading = {
        color : 'white'
    }

    render() {
        return (
            <div>
            
            <div className="col-sm-12">
            <div className="card jumbotron">
            <div className="card-body">
                <h5 className="card-title">Course</h5>
                <p className="card-text">Course Id: {this.props.course.courseId}</p>
                <p className="card-text">Course Name: {this.props.course.courseName}</p> 
                <p className="card-text">Course Fees: {this.props.course.courseFees}</p> 
                <button class="btn btn-danger" onClick={this.props.deleteCourse.bind(this, this.props.course.courseId)}>Delete</button>
                &nbsp; 
                <button class="btn btn-warning" onClick={this.props.updateCourse.bind(this, this.props.course.courseId)}>Update</button>
            </div>
            </div> 
            </div> 
            {/* <h2 style={this.heading}>Course Name: {this.props.course.courseName}  Course Fees: {this.props.course.courseFees}</h2>     */}
            </div>
        )
    }
}

// this.state.courseList.map((course) => (
