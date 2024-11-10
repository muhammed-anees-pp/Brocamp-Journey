def find_missing_number(nums):
    n = len(nums) + 1  # The total number of elements should be len(nums) + 1
    total_sum = n * (n + 1) // 2  # Sum of first n natural numbers
    list_sum = sum(nums)  # Sum of numbers in the list
    return total_sum - list_sum  # The missing number

# Test the function
nums = [1, 2, 3, 5]  # 4 is missing
missing_number = find_missing_number(nums)
print("The missing number is:", missing_number)
