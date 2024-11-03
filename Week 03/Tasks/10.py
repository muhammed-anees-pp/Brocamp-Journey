size = int(input("Enter the size of the array: "))

array = []
print("Enter the values of the array:")
for _ in range(size):
    array.append(int(input()))

for i in range(size - 1):
    for j in range(size - i - 1):
        if array[j] < array[j + 1]:
            array[j], array[j + 1] = array[j + 1], array[j]

print("Sorted array (Descending order):")
print(", ".join(map(str, array)))
