def greet_decor(func):
    def update():
        func()
        print("Hello, Good Morning!!!")
        
    return update

@greet_decor
def greet():
    print("How was the weekend")

greet()