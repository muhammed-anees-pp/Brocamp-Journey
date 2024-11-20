var heading = document.createElement("h1");

function create() {
    heading.innerHTML = "Hello, Welcome";
    document.body.appendChild(heading);
}

function remove() {
    heading.remove();
}


var head = document.getElementById("head1");
var button = document.getElementById("btn");

button.addEventListener("click", changeColor);
head.addEventListener("mouseover", BGColor);

function changeColor() {
    head.style.color="red";
}

function BGColor(){
    head.style.backgroundColor="green";
}