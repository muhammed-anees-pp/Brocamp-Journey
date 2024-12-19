size = 5

for i in range(1, size+1):
    for j in range(1, size+1):
        print("* ", end="")
    print()

print()

for a in range(1, size+1):
    for b in range(1, a+1):
        print("* ", end="")
    print()

print()

for c in range(size, 0, -1):
    for d in range(1, c+1):
        print("* ", end="")
    print()
