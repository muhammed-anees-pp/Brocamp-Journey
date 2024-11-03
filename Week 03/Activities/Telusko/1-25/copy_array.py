from array import *

value = array('i',[2,3,4,5])

newArr = array(value.typecode, (a for a in value))

for i in newArr:
    print(i)