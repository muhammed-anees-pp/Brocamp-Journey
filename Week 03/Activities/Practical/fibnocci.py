def fib(num):
    a = 0
    b = 1

    if num < 0:
        print("Error")
    elif num == 1:
        print(a)
    else:
        print(a)
        print(b)
        for i in range(2,num):
            c = a+b
            print(c)
            a = b
            b = c

number = int(input("Enter a number: "))
fib(number)

