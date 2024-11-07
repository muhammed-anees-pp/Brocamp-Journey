class Outer:
    def __init__(self):
        self.title = "Outer class"
        self.inn = self.innerClass()
    
    def show(self):
        print(self.title)
        self.inn.show()
    
    class innerClass:
        def __init__(self):
            self.title = "Inner class"
            self.inside = self.insideClass()
        
        def show(self):
            print(self.title)
            self.inside.show()

        
        class insideClass:
            def show(self):
                print("This is an inner class of inner class")


obj = Outer()
obj.show()