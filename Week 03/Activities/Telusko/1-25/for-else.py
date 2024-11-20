numbers = [1,2,3,4,6,7,8]

for num in numbers:
    if num%5 == 0:
        print(num)
        break
else:
    print("Not found")