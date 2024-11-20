class Primary:
    def __init__(self):
        self._a = 2
        self.name="Anees"


class Secondary(Primary):
    def __init__(self):
        Primary.__init__(self)
        print("Primary class: ",self._a)
        print(self.name)

b = Secondary()