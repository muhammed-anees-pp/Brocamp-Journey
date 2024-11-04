from array import *

values = array('i', [1,3,4,5,6])

search = int(input("Enter the number to search: "))

index=0
for e in values:
    if e == search:
        print(f"{search} is on {index} position")
        break
    index+=1
else:
    print(f"{search} is not in these array")
    

# using method in array, find index
print("In the position ",values.index(search))