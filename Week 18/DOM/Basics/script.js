// let heading = document.getElementById("head")

// heading.textContent = "Hello Welcome"

// console.log(heading)
// heading.style.color = "blue"
// heading.style.background = "red"

// heading.style.cssText = "background-color: red; color: white; font-size: 100px"

//let heading = document.querySelector('#head') // When taking element by id use # when taking from class use .

// let heading = document.querySelector('.head-class')

// heading.textContent = "Hello Welcome"

// console.log(heading)

let allh = document.querySelectorAll('p')

console.log(allh)

for (let i = 0; i < allh.length; i++) {
    allh[i].textContent = "hello all"
}

let checkh2 = document.querySelectorAll('h2')

let color = ["red","green","black","blue","yellow"]
let arr = ["apple","banana","orange","mango","chikku"]

for (let j = 0; j < checkh2.length; j++) {
    checkh2[j].textContent = arr[j];
    checkh2[j].style.color = color[j]
}

////////////////////////

let button = document.querySelector('.btn')

function myButton() {
    alert("Clicked.............")
}


button.addEventListener('click',myButton)