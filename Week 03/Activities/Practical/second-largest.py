# def second_largest(numbers):
#     # Sort the list in descending order and return the second item
#     sorted_numbers = sorted(numbers, reverse=True)
#     return sorted_numbers[1] if len(numbers) > 1 else None

# numbers = [10, 20, 4, 45, 99]
# result = second_largest(numbers)
# print("Second largest number:", result)

def second_largest(num):
    sort_list = sorted(num, reverse=True)
    return sort_list[1] if len(num)>1 else None

numb = [1,2,3,4,5,6]
result = second_largest(numb)
print("Second largest element: ",result)