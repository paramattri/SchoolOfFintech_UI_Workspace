class Course {
    constructor(courseId, courseName, fees) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.fees = fees;
    }

    getCourseDetails() {
        console.log(this.courseId + "" + this.courseName + "" + this.fees)
    }

}

class CourseHTM {
    static addCourse(course, courselist) {
        const form = document.getElementById('form1');
        //const courselist = document.createElement('ul');
        courselist.innerHTML = `<li>${course.courseId}</li>`
        const submit = document.getElementById('submit');
        form.appendChild(courselist, submit)
    }
}

class LocalStore {

    static courses = new Array();

    static addtoLocal(course) {

        //let courses = this.getCourses();
        courses.push(course)
        localStorage.setItem('courses', JSON.stringify(courses))
        //CourseHTM.addCourse(course);
        // localStorage.removeItem('name')
        //console.log(course);

    }

    static getCourses() {
        let courses = JSON.parse(localStorage.getItem('courses'));
        return courses;
    }

}
document.getElementById("submit").addEventListener('click', (e) => {
    const cid = document.getElementById('cid').value;
    const cname = document.getElementById('cname').value;
    const fees = document.getElementById('fees').value;

    const course = new Course(cid, cname, fees);

    //const coursehtm = new courseHTM();
    //coursehtm.addtoLocal(course);

    LocalStore.addtoLocal(course);

    const courselist = document.createElement('ul');
    let courses = LocalStore.getCourses();
    console.log(courses)
    e.preventDefault();
})
