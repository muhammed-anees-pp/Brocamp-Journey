lst = [10,20,30,40]
print(lst)
for i in lst:
    print(i)

print(len(lst))
lst.insert(2, 50)
print(lst)

thislist = ["apple", "banana", "cherry"]
thistuple = ("kiwi", "orange")
thislist.extend(thistuple)
print(thislist)

lst.sort()
print(lst)

lst.sort(reverse=True)
print(lst)