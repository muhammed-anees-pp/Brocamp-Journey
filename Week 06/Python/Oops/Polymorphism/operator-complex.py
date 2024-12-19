class Complex:
    def __init__(self,r,i):
        self.real = r
        self.imaginary = i
    def __add__(self,other):
        return f"{self.real+other.real}+{self.imaginary+other.imaginary}i"

c1 = Complex(3,4)
c2 = Complex(5,2)
print(c1+c2)