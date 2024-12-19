def bubble(list):

    for i in range(len(list) -1, 0, -1):
        for j in range(i):
            if list[j]>list[j+1]:
                temp = list[j]
                list[j] = list[j+1]
                list[j+1] = temp


num = [10,8,9,3,2,5,6,1,7]

bubble(num)
print(num)