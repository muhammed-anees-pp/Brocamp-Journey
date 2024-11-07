class Student:
    def __init__(self, m1=0, m2=0, m3=0):
        self.m1 = m1
        self.m2 = m2
        self.m3 = m3
        # Call the sum method inside the constructor and print the result
        print("Total marks:", self.sum(self.m1, self.m2, self.m3))

    def sum(self, n1=None, n2=None, n3=None):
        total = 0
        if n1 is not None and n2 is not None and n3 is not None:
            total = n1 + n2 + n3
        elif n1 is not None and n2 is not None:
            total = n1 + n2
        elif n1 is not None:
            total = n1
        return total


# Creating instances of Student
st1 = Student(10)
st2 = Student(10, 20)
st3 = Student(10, 20, 30)
