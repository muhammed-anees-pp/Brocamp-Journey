lst = [1,2,3]

try:
    print("First element: ",lst[0])
    print("Checking element: ",lst[3])
except IndexError:
    print("It is having an Index error")
except:
    print("Something went wrong !!!")