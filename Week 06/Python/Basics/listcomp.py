lst = [1,2,3,4,5,6]

even = [x for x in lst if x%2 == 0]
print(even)

sqr = [x*x for x in lst if x%2 != 0]
print(sqr)

num = [x for x in range (1, 10)]
print(num)

number = [x for x in range(1,20) if x%2 == 0]
print(number)

lst2 =['Anees', 'Midlaj', 'Aseem', 'Vyshak']
lst2cap = [x.upper() for x in lst2]
print(lst2cap)

lst2test = [x.upper() for x in lst2 if "e" in x]
print(lst2test)