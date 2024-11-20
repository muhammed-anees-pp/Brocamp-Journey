//Functions
function greetings() {
    document.write("Good Evening"+"<br>");
}

greetings();

//Function with parameter
function greetings(name) {
    document.write("Good Evening "+name+ "<br>");
}

greetings("John");

function sum (a,b) {
    document.write(a+b +"<br>");
}

sum(50,20);

//Function with return value
function sumb (a,b) {
    return a+b;
}

var result = sumb(10,20);
document.write(result);