lst = [1,2,3,4,5,6]

odd = list(filter(lambda x:x%2 == 1, lst))
print(odd)

double = list(map(lambda y: y*10, lst))
print(double)

from functools import reduce
total = reduce(lambda x, y: x+y, lst)
print(total)