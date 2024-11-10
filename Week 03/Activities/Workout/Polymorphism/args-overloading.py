class Addition:
    def add(self,*args):
        sum = 0
        for e in args:
            sum = sum+e
        return sum


a = Addition()
print(a.add(5,4))

b = Addition()
print(b.add(1,4,9))
