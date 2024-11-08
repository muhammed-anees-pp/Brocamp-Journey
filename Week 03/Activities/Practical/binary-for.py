position = 0

def search(lst, key):
    lower = 0
    upper = len(lst) - 1

    # The range for the loop is set as the maximum number of possible iterations
    for _ in range(len(lst)):
        if lower > upper:
            break  # Exit if the search bounds are invalid

        mid = (lower + upper) // 2
        if lst[mid] == key:
            globals()['position'] = mid
            return True
        elif lst[mid] < key:
            lower = mid + 1
        else:
            upper = mid - 1
    
    return False

lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
se = int(input("Enter a number: "))

if search(lst, se):
    print("Found at position", position)
else:
    print("Not found!")
