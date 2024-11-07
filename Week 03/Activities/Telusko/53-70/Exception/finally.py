def div(num1,num2):
    try:
        result=num1/num2
        print(result)
    except ZeroDivisionError:
        print("Having an error of zero division")
    finally:
        print("Checking finished")


div(10,5)
div(10,0)