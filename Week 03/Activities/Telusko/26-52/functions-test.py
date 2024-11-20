# Function without argument and return
def greeting():
    print("Good Morning")

# Function with argument
def add(x,y):
    c = x+y
    print(c)

# Function with argument and return value
def sub(a,b):
    z=a-b
    return z

# Function with two return values
def add_sub(q,r):
    p= q+r
    s=q-r
    return p,s



# Functions calling
greeting()
add(5,4)
x = sub(10,4)
print(x)
result1,result2 = add_sub(50,25)
print(result1)
print(result2)