from time import sleep
from threading import *

class Test1(Thread):
    def run(self):
        for i in range(10):
            print("Hi")
            sleep(1)

class Test2(Thread):
    def run(self):
        for i in range(10):            
            print("Hello")
            sleep(1)

t1 = Test1()
t2 = Test2()

t1.start()
t2.start()