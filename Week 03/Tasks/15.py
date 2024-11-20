arr = []  

def getArray():
    global arr  
    size = int(input("Enter the size of the array: "))
    for i in range(size):
        element = int(input(f"Enter element {i + 1}: "))
        arr.append(element)

def displayArray():
    global arr  
    print("Array elements are:", arr)


def main():
    getArray()  
    displayArray() 
main()
