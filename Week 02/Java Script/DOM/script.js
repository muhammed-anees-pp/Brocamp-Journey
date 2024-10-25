//Access with id
var a = document.getElementById("head1");

//Changing the content on head1 id
a.innerHTML = "Muhammed Anees P P";

//Changing the style
a.style.color = "blue";


//Access with class
var b =document.getElementsByClassName("head2");
b[0].innerHTML="Testing";
b[1].style.color="red";


//Access with tag name
var c =document.getElementsByTagName("h3");
c[0].innerHTML="1st Change";
c[1].style.color="blue";
c[2].innerHTML="3rd Change";


//Access wth Name
var d =document.getElementsByName("text-box")[0];
var e =document.getElementById("welcome");

function greeting() {
    e.innerHTML = "Hello "+ d.value;
}

//Get Element by CSS

//Use of Queryselector all
var f =document.querySelectorAll("h4");
console.log(f);

f[1].innerHTML="Changed 1st line";

//Use of Queryselector (We can use it for unique, like id)
var g =document.querySelector("#heading");
g.innerHTML="Heading change"

var h =document.querySelectorAll(".headclass");
h[2].style.color="red";