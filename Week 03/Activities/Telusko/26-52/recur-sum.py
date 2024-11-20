def sum(num):
    if num == 0:
        return 0
    return num+sum(num-1)

number = int(input("Enter a number: "))
x = sum(number)
print(x)