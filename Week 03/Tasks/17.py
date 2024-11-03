class Calculator:
    def addition(self, a, b):
        return a + b


    def subtraction(self, a, b):
        return a - b
    
    def multiplication(self, a, b):
        return a * b

    def division(self, a, b):
        if b == 0:
            return "Error: Division by zero is undefined."
        else:
            return a / b

def main():
    calc = Calculator()

    while True:
        print("\nMenu:")
        print("1. Addition")
        print("2. Subtraction")
        print("3. Multiplication")
        print("4. Division")
        print("5. Exit")
        
        choice = int(input("Enter your choice (1-5): "))

        if choice == 5:
            print("Exiting the program.")
            break
        
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

        
        if choice == 1:
            result = calc.addition(num1, num2)
            print(f"The result of addition is: {result}")
        elif choice == 2:
            result = calc.subtraction(num1, num2)
            print(f"The result of subtraction is: {result}")
        elif choice == 3:
            result = calc.multiplication(num1, num2)
            print(f"The result of multiplication is: {result}")
        elif choice == 4:
            result = calc.division(num1, num2)
            print(f"The result of division is: {result}")
        else:
            print("Invalid choice. Please choose a valid option.")

main()
