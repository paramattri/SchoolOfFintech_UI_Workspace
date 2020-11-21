import React, { Component } from "react";

class Teacher extends Component
{

    state={
        teacherList: [
            {
                teacherId:"J001",
                teacherName:"Rahul",
                courseName:"Java",
                salary:"1000"
            },
            {
                teacherId:"C001",
                teacherName:"Mahesh",
                courseName:"C#",
                salary:"1500"
            },
            {
                teacherId:"K001",
                teacherName:"Suresh",
                courseName:"Kotlin",
                salary:"5000"
            },
           
        ]
    }
render(){
    
    return (
        this.state.teacherList.map((teacher)=>

        (
            <div className="col-sm-4">
            <div className="card jumbotron">
                <div className="card-body">
                    <h5 className="card-title">Teacher</h5>
                    <p className="card-text">Teacher Id: {teacher.teacherId}</p>
                    <p className="card-text">Teacher Name: {teacher.teacherName}</p> 
                    <p className="card-text">Course Name: {teacher.courseName}</p> 
                    <p className="card-text">Salary: {teacher.salary}</p>   
                </div>
            </div> 
        </div> 
        )
        
    )
    )
}
}
export default Teacher