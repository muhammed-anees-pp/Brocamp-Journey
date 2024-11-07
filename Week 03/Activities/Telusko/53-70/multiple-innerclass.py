class Hospital:
    def __init__(self):
        self.title = "PVS"
        self.dent = self.Dentist()
        self.genr = self.General()
    
    def display(self):
        print("Hospital: ",self.title)
        self.dent.show()
        self.genr.show()
    

    class Dentist:
        def __init__(self):
            self.name = "Dr. Shabeer"
            self.degree = "BDS"
        
        def show(self):
            print("Name: ",self.name)
            print("Degree: ",self.degree)
        
    class General:
        def __init__(self):
            self.name = "Dr. Ashique"
            self.degree = "MBBS"
        
        def show(self):
            print("Name: ",self.name)
            print("Degree: ",self.degree)


hp = Hospital()
hp.display()