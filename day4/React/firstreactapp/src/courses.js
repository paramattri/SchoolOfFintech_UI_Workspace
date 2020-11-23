import React, { Component } from 'react'
import Course from './Course'
import './courses.css'
class Courses extends Component
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
        ],
        courseId : '',
        courseName : '',
        courseFees : ''

    }

    addCourse = (e) => {

        e.preventDefault()

        let newCourse = {
            courseId : this.state.courseId,
            courseName : this.state.courseName,
            courseFees : this.state.courseFees
        }

        this.setState({
            courseList : [...this.state.courseList, newCourse],
            courseId : '',
            courseName : '',
            courseFees : ''
        })
    }


    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    deleteCourse = (courseId) => {
        let cList = this.state.courseList.filter((course) => {
            return course.courseId !== courseId
        })

        this.setState({
            courseList : cList
        })
    }

    updateCourse = (courseId) => {

        // let cList = this.state.courseList.filter((course) =>{
        //     return course.courseId = courseId
        // })

        // this.setState({
        //     courseId : cList.courseId,
        //     courseName : cList.courseName,
        //     courseFees : cList.courseFees
        // })
    }

    render()
    {
        console.log(this.props.message)
        return(
            <div>
                
                <br></br>

                <form onSubmit={this.addCourse}>

                    <div className="form-group">
                        <label for="courseId">Course Id:</label>
                        <input type="text" className="form-control" name="courseId" value={this.state.courseId} onChange={this.changeHandler}/>
                    </div>

                    <div className="form-group">
                        <label for="courseName">Course Name:</label>
                        <input type="text" className="form-control" name="courseName" value={this.state.courseName} onChange={this.changeHandler}/>
                    </div>

                    <div className="form-group">
                        <label for="courseFees">Course Fees:</label>
                        <input type="text" className="form-control" name="courseFees" value={this.state.courseFees} onChange={this.changeHandler}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>  

                <br></br>
                <br></br>

                <div className="row">
                {this.state.courseList.map((course) => <Course course={course} key={course.courseId} deleteCourse={this.deleteCourse} updateCourse={this.updateCourse}/>)}
                </div>


            </div>
        )            
    }
}

export default Courses