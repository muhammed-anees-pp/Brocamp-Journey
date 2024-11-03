rows = 4
current_number = 7

for i in range(rows, 0, -1):  # Loop from 4 to 1
    for j in range(i):  # Inner loop to print numbers in each row
        print(current_number, end=' ')  # Print the current number
        current_number += 1  # Increment the number for the next position
    print()  # Move to the next line after finishing one row
