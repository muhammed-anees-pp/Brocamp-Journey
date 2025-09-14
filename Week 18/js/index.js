let object1 = {
    name : "Anees",
    city : "Malappuram",
    getInfo : function() {
        console.log(this.name + " " + this.city)
    }
}


let object2 = {
    name : "Ashmil"
}

//Not a good method
object2.__proto__ = object1
