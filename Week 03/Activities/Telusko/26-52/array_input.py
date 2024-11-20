from array import *

numbers = array('i',[])

size = int(input("Enter the size of the array: "))
print(f"Enter {size} integer numbers: ")
for i in range(size):
    x = int(input())
    numbers.append(x)

print(numbers)