t = open('mydata','a')
t.write("\nNow the file has more content!")
t.close

#open and read the file after the appending:
t = open('mydata', 'r')
print(t.read())