from array import *

values = array('i',[1,2,3,4,-5])

print(values)

# Print the address
print(values.buffer_info)

# Print the size
x = len(values)
print(x)

# Add values
values.append(6)
print(values)

values.reverse()
print(values)

# Print values one by one
for i in range(len(values)):
    print(values[i])

print()

# Also like these
for e in values:
    print(e)
