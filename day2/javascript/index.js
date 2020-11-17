// console.log("Page loaded")
// console.warn("Warning message")
// console.error("Error message")

// const a = 20
// const b = "20"
// if(a == b)
// {
//     console.log("values are same")
// }
// else{
//     console.log("values are not same")
// }

// const str = "param"
// str[1] = "p"
// console.log(typeof str+1)

//console.log(document.getElementById("form1"))
//console.log(document.querySelector("h1"))

const form1 = document.getElementById("form1")
form1.style.background = "gray"

console.log(document.querySelector(".name"))

const subbtn = document.querySelector("#submit")
subbtn.style.background = "green";
subbtn.style.color = "white"

let b = true
subbtn.addEventListener('click', (e) => {
    console.log("clicked")
    if(b){
        subbtn.style.background = "red"
        b = false
    }
    else{
        subbtn.style.background = "blue"
        b = true
    }
})

const cList = document.querySelector("#clist")
//cList.firstElementChild.textContent = "JavaScript"
cList.firstElementChild.innerHTML = "<h3>JavaScript</h3>"
//cList.firstElementChild.remove()
cList.children[1].innerHTML = "<h3>C#</h3>"

const li2 = document.createElement("li")
li2.innerText = "Java Server Pages"
cList.appendChild(li2)
