zipped = [('Alice', 25), ('Bob', 30), ('Charlie', 35)]

# Unzipping the tuples
names, ages = zip(*zipped)

print(names)  # Output: ('Alice', 'Bob', 'Charlie')
print(ages)   # Output: (25, 30, 35)