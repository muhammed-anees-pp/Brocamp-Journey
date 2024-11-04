def greet_decor(func):
    def update():
        print("Hello, Good Morning!!!")
        func()
    return update

@greet_decor
def greet():
    print("How was the weekend")

greet()