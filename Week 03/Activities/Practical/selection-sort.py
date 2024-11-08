num = [5,3,8,6,7,2]

for i in range(len(num)):
    for j in range(i, len(num)):
        if num[i]>num[j]:
            temp = num[i]
            num[i] = num[j]
            num[j] = temp

print(num)