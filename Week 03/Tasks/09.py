size = int(input("Enter the size of Array 1: "))

array1 = []
print("Enter the values of Array 1:")
for _ in range(size):
    array1.append(int(input()))

print("\nArray 1:", array1)

array2 = array1.copy()
additional_elements = input("Enter the elements to add to Array 2, separated by spaces: ")
array2.extend(map(int, additional_elements.split()))

print("\nBefore swapping:")
print("Array 1:", array1)
print("Array 2:", array2)

array1, array2 = array2, array1

print("\nAfter swapping:")
print("Array 1:", array1)
print("Array 2:", array2)
