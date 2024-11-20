class Student:
    school = "PPTMYHSS Cherur"

    def __init__(self,mark1,mark2,mark3):
        self.mark1 = mark1 
        self.mark2 = mark2
        self.mark3 = mark3
    
    #class method
    @classmethod
    def info(cls):
        return cls.school
    
print(Student.info())