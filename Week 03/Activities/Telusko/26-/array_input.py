from array import *

values = array('i', [])

size = int(input("Enter the size of the array: "))

for i in range(size):
    num = int(input("Enter the number: "))
    values.append(num)

print(values)

val = int(input("Enter the number to search: "))
k=0
for e in values:
    if e == val:
        print(k)
        break

    k+=1

print(values.index(val))