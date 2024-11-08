position = 0
def search(list,key):

    for i in range(len(list)):
        if list[i] == key:
            globals()['position'] = i
            return True
    return False

lst = [1,2,4,3,5,6]
se = int(input("Enter a number: "))

if search(lst,se):
    print("Found at ",position+1)
else:
    print("Not found")