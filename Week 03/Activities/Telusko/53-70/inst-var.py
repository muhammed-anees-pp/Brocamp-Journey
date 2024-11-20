class Car:
    def __init__(self,brand,color):
        self.brand = brand  # instant variables
        self.color = color  # instant variables

bmw = Car("BMW","White")
audi = Car("Audi","Black")

print(bmw.brand)
print(bmw.color)

print(audi.brand)
print(audi.color)
