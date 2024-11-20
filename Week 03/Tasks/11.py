input_string = input("Enter a string: ")

input_string = input_string.lower()

is_palindrome = True

for i in range(len(input_string) // 2):
    if input_string[i] != input_string[len(input_string) - 1 - i]:
        is_palindrome = False
        break

if is_palindrome:
    print("Entered string is a palindrome")
else:
    print("Entered string is not a palindrome")
