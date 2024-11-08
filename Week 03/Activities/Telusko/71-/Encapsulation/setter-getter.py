class Primary:
    def __init__(self,name,age,rollno):
        self.name = name # Public variable
        self.__age = age # Private variable
        self._rollno = rollno # Protected variable
    
    def get_age(self): #get method
        return self.__age
    
    def set_age(self,age): #set method
        if age < 18:
            print("You can't access")
        else:
            self.__age = age

    def __display(self): # Private method
        print(f"Name: {self.name} Age: {self._age} Rollno: {self.__rollno}")

    def show(self):
        self.__display()    

class Secondary(Primary):
    def display(self):
        print(f"Name is {self.name} age is {self._age}")

t = Primary("Anees",17,17)
print(t.get_age())
t.set_age(20)
print(t.get_age())