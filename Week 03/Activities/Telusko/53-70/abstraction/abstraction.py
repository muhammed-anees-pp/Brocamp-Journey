from abc import ABC, abstractmethod

class Main(ABC):

    @abstractmethod
    def mainMethod(self):
        pass

class Example1(Main):

    def display(self):
        print("Example class 1")

class Example2(Main):

    def mainMethod(self):
        print("Example 2")

obj = Example2()
# obj.mainMethod()