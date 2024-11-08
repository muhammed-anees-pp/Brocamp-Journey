f = open('test.jpg', 'rb')

f1 = open('new.jpg', 'wb')

for e in f:
    f1.write(e)