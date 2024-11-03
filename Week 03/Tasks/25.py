class CustomException(Exception):
    pass

def menu():
    print("Menu:\n1. Raise Exception\n2. Exit")
    choice = input("Enter your choice: ")
    if choice == '1':
        raise CustomException("Custom Exception Triggered")

try:
    menu()
except CustomException as e:
    print(e)
