from numpy import *

m = matrix('1,2,3;4,5,6;7,8,9')
print(m)
print(m.diagonal)

# Matrix multiplication in python
m2 = matrix('11,12,13;14,15,16;17,18,19')
print(m2)

m3 = m*m2
print(m3)

