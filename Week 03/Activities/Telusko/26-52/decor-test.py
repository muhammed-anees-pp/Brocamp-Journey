def div_decor(func):
    def check(x,y):
        if x<y:
            x,y = y,x
        return func(x,y)
    return check

@div_decor
def division(x,y):
    print(x/y)

division(5,10)