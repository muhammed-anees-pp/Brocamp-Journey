class Student:
    def __init__(self,m1,m2):
        self.m1 = m1
        self.m2 = m2
    
    def __add__(self,sample):
        m1 = self.m1 + sample.m1
        m2 = self.m2 + sample.m2
        m3 = Student(m1,m2)
        
        return m3
    
    def __gt__(self,sample):
        r1 = self.m1 + self.m2
        r2 = sample.m1 + sample.m2
        if r1>r2:
            return True
        else:
            return False

obj1 = Student(50,60)
obj2 = Student(90,30)

obj3 = obj1+obj2
print(obj3.m1)

if obj1 > obj2:
    print("obj1 win")
else:
    print("obj2 wins")