num = [5,3,8,6,7,2]

for i in range(len(num)-1,0,-1):
    for j in range(i):
        if num[j]>num[j+1]:
            temp = num[j]
            num[j] = num[j+1]
            num[j+1] = temp
print(num)