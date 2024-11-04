from array import *

values = array('i',[1,2,3,4,5])

newArray1 = array(values.typecode, (a for a in values))
print(newArray1)

newArray2 = array(values.typecode, (a*2 for a in values))
print(newArray2)