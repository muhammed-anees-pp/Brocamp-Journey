//Array
var animal = ["Dog", "Cat", "Fox"];

//Print array
document.write(animal + "<br>");

//Print position element
document.write(animal[1] + "<br>");

//Change position element
animal[2]="Horse";
document.write(animal+ "<br>");

//Length of the array
var x = animal.length;
document.write(x + "<br>");

//Print array using for loop
for(var i=0;i<x;i++) {
    document.write(animal[i]+"<br>");
}

//Add elements to the end
//animal[4]="Lion";
//document.write(animal+"<br><br>")

//Add elements using push
animal.push("Tiger","Monkey","Chettah","Rabbit","Cow");
document.write(animal+"<br><br>");


//Delete first element of the array
animal.shift();
document.write(animal+"<br><br>");

//Delete last element of the array
animal.pop();
document.write(animal+"<br><br>");

//Splice
animal.splice(2,2);
document.write(animal+"<br><br>");

//Sort
animal.sort();
document.write(animal+"<br><br>");

var number = [50, 40, 30, 20, 10];
number.sort();
document.write(number);