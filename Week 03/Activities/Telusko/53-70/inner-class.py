class Doctor:
    def __init__(self):
        self.hospital = "PVS"
        self.dent = self.Dentist()

    def show(self):
        print("In outer class")
        print("Name: ",self.hospital)
        self.dent.show()

    # inner class
    class Dentist:
        def __init__(self):
            self.name = "Dr. Shabeer"
            self.degree = "BDS"
        def show(self):
            print("Name: ",self.name)
            print("Degree: ",self.degree)

dt = Doctor()
dt.show()
