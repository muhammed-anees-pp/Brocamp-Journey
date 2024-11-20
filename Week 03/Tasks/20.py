from abc import ABC, abstractmethod

class Calculator(ABC):
    def __init__(self, id, name):
        self.id = id
        self.name = name

    @abstractmethod
    def add(self, a, b):
        pass

    @abstractmethod
    def sub(self, a, b):
        pass

    @abstractmethod
    def mul(self, a, b):
        pass

    @abstractmethod
    def div(self, a, b):
        pass

class SimpleCalculator(Calculator):
    def add(self, a, b):
        return a + b

    def sub(self, a, b):
        return a - b

    def mul(self, a, b):
        return a * b

    def div(self, a, b):
        if b != 0:
            return a / b
        else:
            return "Division by zero is undefined"



def main():
    calc = SimpleCalculator(1, "Basic Calculator")
    print("Calculator ID:", calc.id)
    print("Calculator Name:", calc.name)
    
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))

    print("Addition:", calc.add(num1, num2))
    print("Subtraction:", calc.sub(num1, num2))
    print("Multiplication:", calc.mul(num1, num2))
    print("Division:", calc.div(num1, num2))

main()
