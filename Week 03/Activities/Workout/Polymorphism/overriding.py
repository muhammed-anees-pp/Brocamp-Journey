class A:
    def display(self):
        print("Class A")
    
class B(A):
    def display(self):
        print("Class B")


obj = B()
obj.display()