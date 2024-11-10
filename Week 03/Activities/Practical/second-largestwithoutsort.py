def second_largest(numbers):
    largest = second = float('-inf')
    for num in numbers:
        if num > largest:
            second = largest
            largest = num
        elif num > second and num != largest:
            second = num
    return second if second != float('-inf') else None

numbers = [10, 20, 4, 45, 99]
result = second_largest(numbers)
print("Second largest number:", result)
