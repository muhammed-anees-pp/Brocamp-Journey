x =10
print(id(x))

def test():
    x = 10
    print(id(x))
    a = globals() ['x']
    print(id(a))
    print("in fun: ",x)
    globals() ['x'] = 15


test()
print("Out: ",x)
