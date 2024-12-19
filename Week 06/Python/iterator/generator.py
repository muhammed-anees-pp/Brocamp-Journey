def topten():

    n = 1
    while n <=10:
        sqrt = n*n
        n+=1
        yield sqrt

val = topten()

for i in val:
    print(i)