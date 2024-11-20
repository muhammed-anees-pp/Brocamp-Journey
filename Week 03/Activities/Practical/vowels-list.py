text = str(input("Enter the word: "))

vowels = [e for e in text if e.lower() in "aeiou"]
print(vowels)