class BankAccount:
    def __init__(self, name, account_number):
        self._name = name
        self._account_number = account_number

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        if isinstance(value, str) and value.isalpha():
            self._name = value
        else:
            raise ValueError("Name should be a string containing only alphabetic characters")

    @property
    def account_number(self):
        return self._account_number

    @account_number.setter
    def account_number(self, value):
        if isinstance(value, int) and value > 0:
            self._account_number = value
        else:
            raise ValueError("Account number should be a positive integer")


account = BankAccount("John", 12345678)
print("Initial Name:", account.name)
print("Initial Account Number:", account.account_number)

account.name = "Alice"
account.account_number = 87654321

print("Updated Name:", account.name)
print("Updated Account Number:", account.account_number)
