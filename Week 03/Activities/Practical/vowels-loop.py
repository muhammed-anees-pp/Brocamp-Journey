text = str(input("Enter the word: "))

vowels ="aeiou"

for e in text:
    if e.lower() in vowels:
        print(e)