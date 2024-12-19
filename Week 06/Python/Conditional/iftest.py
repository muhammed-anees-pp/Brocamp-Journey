a = int(input("Enter a number: "))
b = int(input("Enter the 2nd number: "))

if a>b:
    print(f"{a} is greaterthan {b}")
else:
    print(f"{b} is greaterthan {a}")

print("A") if a>b else print("B")