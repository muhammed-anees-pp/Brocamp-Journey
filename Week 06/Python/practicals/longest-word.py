# Function to find the longest word in a string
def longest_word(string):
    words = string.split()  # Split the string into words
    longest = max(words, key=len)  # Find the word with the maximum length
    return longest

# Test the function
input_string = "The quick brown fox jumped over the lazy dog"
result = longest_word(input_string)
print(f"The longest word is: {result}")
