def get_numbers():
    numbers = input("Enter numbers separated by commas: ")
    return [int(num) for num in numbers.split(',')]

def process_numbers(numbers, func):
    return [func(num) for num in numbers]

square = lambda x: x ** 2

numbers = get_numbers() 
squared_numbers = process_numbers(numbers, square)  
sum_of_squares = sum(squared_numbers)  

print("Original numbers:", numbers)
print("Squared numbers:", squared_numbers)
print("Sum of squared numbers:", sum_of_squares)
