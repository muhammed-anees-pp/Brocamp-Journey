def factorial(num):
    if num==0:
        return 1
    return num * factorial(num-1)

number = int(input("Enter a number: "))
result = factorial(number)
print(result)