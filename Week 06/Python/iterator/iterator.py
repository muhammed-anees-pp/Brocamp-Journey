mytuple = ("apple", "banana", "cherry")
myit = iter(mytuple)

print(next(myit))
print(next(myit))
# print(next(myit))

# We can also use it like,
print(myit.__next__())