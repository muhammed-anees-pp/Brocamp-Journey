class A:
    def __init__(self):
        print("Class A Constructor")

    def feature1(self):
        print("feature 1")
    
    def feature2(self):
        print("feature 2")


class B():
    def __init__(self):
        print("Class B Constructor")

    def feature3(self):
        print("feature 3")
    
    def feature4(self):
        print("feature 4")

class C(A,B):
    def __init__(self):
        super().__init__()
        print("In C init")

obj = C()
print(obj)