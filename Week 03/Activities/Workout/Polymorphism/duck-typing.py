class BMW:
    def drive(self):
        print("Priority for driving experience and comfort in BMW")
    
    def co_drive(self):
        print("Descent experience in BMW")

class Benz:
    def drive(self):
        print("Descent experience in Benz")
    
    def co_drive(self):
        print("Priority for passanger experience and comfort in Benz")

# class Audi:
#     def drive(self):
#         print("Descent experience in Audi")
    

def car(name):
    name.drive()
    name.co_drive()
    print("Over all good experience")


c1 = Benz()
car(c1)

c2 = BMW()
car(c2)

# c3 = Audi() # It will give you error, because in Audi class there is no co_drive method
# car(c3)