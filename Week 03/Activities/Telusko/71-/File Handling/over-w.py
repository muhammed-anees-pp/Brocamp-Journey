f = open("over.txt", "w")
f.write("Over writing content")
f.close()

#open and read the file after the overwriting:
f = open("over.txt", "r")
print(f.read())