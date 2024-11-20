def count(lst):
    even = 0
    odd = 0

    for e in lst:
        if e%2 ==0:
            even+=1
        else:
            odd+=1
    
    print("Total even: {}" " and Odd: {}".format(even,odd))

num = [1,2,3,4,5,6]
count(num)