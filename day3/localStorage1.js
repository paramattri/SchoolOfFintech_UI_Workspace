class Course{
    constructor(courseId, courseName, fees){
        this.courseId = courseId
        this.courseName = courseName
        this.fees = fees
    }
}

class CourseHTML{
    static addCourse(course){
        const form = document.getElementById('form1')
        const courseList = document.createElement('ul')
        courseList.innerHTML = `<li>${course.courseId}<input type='button' value='delete'></li>`
        const submit = document.getElementById('submit')
        form.appendChild(courseList, submit)
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

//loadCourses()
document.getElementById('DOMContentLoaded', loadCourses())

document.getElementById("submit").addEventListener('click', (e) => {
    e.preventDefault()
    const cid = document.getElementById('cid').value;
    const cname = document.getElementById('cname').value;
    const fees = document.getElementById('fees').value;

    const course = new Course(cid, cname, fees)
    LocalStore.addToLocal(course)
    location.reload()
    // let courses = LocalStore.getCourses()
    // console.log(courses)
})

document.getElementById('form1').addEventListener('click', (e) => {
    //console.log(e.target.parentElement.textContent)
    let courses = LocalStore.getCourses()
    for(let i = 0; i < courses.length; i++){
        if(courses[i].courseId == e.target.parentElement.textContent){
            courses.splice(i, 1)
            location.reload()
        }
    }
    localStorage.setItem('courses', JSON.stringify(courses))
})
