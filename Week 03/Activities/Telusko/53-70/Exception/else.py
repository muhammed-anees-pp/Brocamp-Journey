def test(num1,num2):
    try:
        div = num1/num2
    except ZeroDivisionError:
        print("Something went wrong !!!")
    else:
        print("Result: ",div)

test(10,3)
test(5,0)