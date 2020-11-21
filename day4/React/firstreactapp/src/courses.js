import React, { Component } from 'react'
class Course extends Component
{   

    state = {
        courseList : [
            {
                courseId : 'J001',
                courseName : 'Java',
                courseFees : 1000
            },
            {
                courseId : 'C001',
                courseName : 'C#',
                courseFees : 5000
            },
            {
                courseId : 'P001',
                courseName : 'Python',
                courseFees : 10000
            }
        ]
    }

    render()
    {
        console.log(this.props.message)
        return this.state.courseList.map((course) => (
            <div className="col-sm-4">
                <div className="card jumbotron">
                    <div className="card-body">
                        <h5 className="card-title">Course</h5>
                        <p className="card-text">Course Id: {course.courseId}</p>
                        <p className="card-text">Course Name: {course.courseName}</p> 
                        <p className="card-text">Course Fees: {course.courseFees}</p>  
                    </div>
                </div> 
            </div> 
        ))
            
    }
}

export default Course