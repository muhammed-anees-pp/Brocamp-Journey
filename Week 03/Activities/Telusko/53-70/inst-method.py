class Student:
    def __init__(self,mark1,mark2,mark3):
        self.mark1 = mark1 
        self.mark2 = mark2
        self.mark3 = mark3

    #instant method    
    def avg(self):
        return (self.mark1 + self.mark2 + self.mark3)/3

    #accessor method
    def get_mark1(self):
        return self.mark1
    
    #mutator method
    def set_mark2(self,mark2):  
        self.mark2 = mark2
        return self.mark2


st1 = Student(100,50,50)
print(st1.avg())

x = st1.get_mark1()
print(x)

y = st1.set_mark2(40)
print(y)
