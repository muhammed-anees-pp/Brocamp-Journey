def reverse_string_by_words(s):
    # Split the string into words
    words = s.split()
    # Reverse the list of words and join them back into a string
    reversed_string = ' '.join(words[::-1])
    return reversed_string

# Test case
input_string = "Hello World from Python"
result = reverse_string_by_words(input_string)
print("Reversed string by words:", result)
