let userName1 = document.querySelector("#userName1").textContent

let followAlert1 = document.querySelector("#first")
followAlert1.addEventListener("click", (e) => {

    alert("You have successfully followed "+userName1)
})

const userName2 = document.querySelector("#userName2").textContent

const followAlert2 = document.querySelector("#second")
followAlert2.addEventListener("click", (e) => {

    alert("You have successfully followed "+userName2)
})

const userName3 = document.querySelector("#userName3").textContent

const followAlert3 = document.querySelector("#third")
followAlert3.addEventListener("click", (e) => {

    alert("You have successfully followed "+userName3)
})
