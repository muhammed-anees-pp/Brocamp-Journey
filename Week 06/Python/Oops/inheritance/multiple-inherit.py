class A:
    def feature1(self):
        print("feature 1")
    
    def feature2(self):
        print("feature 2")


class B():
    def feature3(self):
        print("feature 3")
    
    def feature4(self):
        print("feature 4")

class C(A,B):
    def feature5(self):
        print("feature 5")



obj3 = A()
obj3.feature1
obj3.feature2

# b class objects
obj1 = B()
obj1.feature3
obj1.feature4

# C class objects
obj = C()
obj.feature1
obj.feature2
obj.feature3
obj.feature4
obj.feature5
print(obj.feature1(), obj.feature2(), obj.feature3(), obj.feature4(), obj.feature5())