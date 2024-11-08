pos = 0
def search(lst,key):
    
    i= 0
    while i<len(lst):
        if lst[i] == key:
            globals()['pos'] = i
            return True
        i = i+1
    return False

list1 = [2,4,3,5,1]
se_key = int(input("Enter the number: "))

if search(list1,se_key):
    print("Found at ",pos+1)
else:
    print("Not Found")