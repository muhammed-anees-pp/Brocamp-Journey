def hello_decorator(func):
    def wrapper():
        print("HELLO WORLD")
        func()
    return wrapper


@hello_decorator
def main_function():
    pass 

main_function()
