list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']

# Zipping the two lists together
zipped = zip(list1, list2)

# Converting to a list to view the result
print(list(zipped))  # Output: [(1, 'a'), (2, 'b'), (3, 'c')]
