class Primary:
    def __init__(self,name,age,rollno):
        self.name = name # Public variable
        self._age = age # Protected variable
        self.__rollno = rollno # Private variable
    
    def __display(self): # Private method
        print(f"Name: {self.name} Age: {self._age} Rollno: {self.__rollno}")

    def show(self):
        self.__display()    

class Secondary(Primary):
    def display(self):
        print(f"Name is {self.name} age is {self._age}")

t = Secondary("Anees",23,17)
t._Primary__display() #Name manling