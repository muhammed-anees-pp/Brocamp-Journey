tp = (1,2,3,4)
print(tp)
for i in tp:
    print(i)

# Tuple constructor tuple()

tuplecons = tuple((1,3,4,5,6))
print(tuplecons)

if 3 in tuplecons:
    print("Hello")

# Make Changes in tuple
x = (1,2,3,4,6)
y = list(x)
y[0] = 0
x = tuple(y)
print(x)

a = list(x)
a.insert(4, 5)
x = tuple(a)
print(x)

b = list(x)
b.remove(3)
x = tuple(b)
print(x)