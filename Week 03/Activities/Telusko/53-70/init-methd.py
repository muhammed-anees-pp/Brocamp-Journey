class Person:
    def __init__(self,name,age):
        self.name=name
        self.age=age
    
    def printdata(self):
        print(f"Name is {self.name} and age is {self.age}")

name1 = Person("Anees",23)
name2 = Person("Midlaj",22)

name1.printdata()
name2.printdata()
