class MatrixOperations:
    def __init__(self, size):
        self.size = size
        self.array1 = []
        self.array2 = []
        self.result = []

    def getArray(self, array_num):
        array = []
        print(f"Enter the values of array {array_num}")
        for i in range(self.size):
            row = list(map(int, input().split()))
            array.append(row)
        if array_num == 1:
            self.array1 = array
        else:
            self.array2 = array

    def addArray(self):
        self.result = [[self.array1[i][j] + self.array2[i][j] for j in range(self.size)] for i in range(self.size)]

    def displayArray(self):
        print("Sum of array 1 and array 2:")
        for row in self.result:
            print("\t".join(map(str, row)))

def main():
    size = int(input("Enter the size of arrays: "))
    matrix = MatrixOperations(size)
    matrix.getArray(1)
    matrix.getArray(2)
    matrix.addArray()
    matrix.displayArray()

main()
