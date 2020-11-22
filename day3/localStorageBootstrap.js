class Course{
    constructor(courseId, courseName, courseMode, courseFees){
        this.courseId = courseId
        this.courseName = courseName
        this.courseMode = courseMode
        this.courseFees = courseFees
    }
}

class CourseHTML{
    static addCourse(course){
        const cardsData = document.getElementById('cards-data')
        const courseData = document.createElement('div')
        const data = ``+
                    `<div class="col-sm-4">`+
                    `   <div class="card" style="background-color: rgb(21, 32, 43);color: rgb(255, 255, 255);">`+
                    `       <div class="card-body">`+
                    `           <h5 class="card-title">Course</h5>`+
                    `           <p class="card-text">Id: ${course.courseId}</p>`+
                    `           <p class="card-text">Name: ${course.courseName}</p>`+
                    `           <p class="card-text">Mode: ${course.courseMode}</p>`+
                    `           <p class="card-text">Fees: ${course.courseFees}</p>`+
                    `           <button type="button" class="btn btn-danger delete">Delete</button> <button type="button" class="btn btn-warning update">Update</button>`+
                    `       </div>`+
                    `   </div>`+
                    `</div>`
        
        courseData.innerHTML = data
        cardsData.innerHTML += courseData.innerHTML
    }
}

class LocalStore{

    static addToLocal(course){
        let courses = this.getCourses()
        courses.push(course)
        localStorage.setItem('courses', JSON.stringify(courses))
    }

    static getCourses(){
        let courses = JSON.parse(localStorage.getItem('courses'))
        if(courses == null){
            courses = []
        }
        return courses;
    }
}

function loadCourses(){
    const courses = LocalStore.getCourses()
    courses.forEach(element => {
        CourseHTML.addCourse(element)
    });
}

document.getElementById('DOMContentLoaded', loadCourses())

document.getElementById("submit").addEventListener('click', (e) => {
    e.preventDefault()
    const courseId = document.getElementById('courseId').value;
    const courseName = document.getElementById('courseName').value;
    const courseMode = document.getElementById('courseMode').value;
    const courseFees = document.getElementById('courseFees').value;

    const course = new Course(courseId, courseName, courseMode, courseFees)
    LocalStore.addToLocal(course)
    location.reload()
})

// document.getElementById('cards-data').addEventListener('click', (e) => {
//     //console.log(e.target.parentElement.children[1].textContent)
//     const idValue = e.target.parentElement.children[1].textContent.split(" ")[1]
//     //console.log(idValue)
//     let courses = LocalStore.getCourses()
//     for(let i = 0; i < courses.length; i++){
//         if(courses[i].courseId == idValue){
//             courses.splice(i, 1)
//             location.reload()
//         }
//     }
//     localStorage.setItem('courses', JSON.stringify(courses))
// })
