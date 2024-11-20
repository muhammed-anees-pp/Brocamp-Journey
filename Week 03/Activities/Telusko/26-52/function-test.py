# Checking with normal variable
def update(x):
    print(id(x))
    x=8
    print(id(x))
    print("x: ",x)


a=10
print(id(a))
update(a)
print("a: ",a)

# Checking with llist
print("\n\nChecking with list")
def upgrade(lst):
    print(id(lst))
    lst[2]=20
    print(id(lst))
    print("fun: ",lst)

num = [1,3,4,5,6]
print(id(num))
print("numbeg: ",num)
upgrade(num)
print("numf: ",num)