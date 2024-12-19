def fact(num):
    if num == 0:
        return 1
    return num*(fact(num-1))


number = int(input("Enter a number: "))
result = fact(number)
print(result)