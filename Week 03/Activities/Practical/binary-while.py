position =0

def search(list,key):

    lower = 0
    upper = len(list)-1
    while lower <= upper:
        mid = (lower+upper) // 2
        if list[mid] == key:
            globals()['position'] = mid
            return True
        else:
            if mid < key:
                lower = mid+1
            else:
                upper = mid-1       
    return False

lst = [1,2,3,4,5,6,7,8,9,10]
se = int(input("Enter a number: "))

if search(lst,se):
    print("Found at ",position+1)
else:
    print("Not found !!!")