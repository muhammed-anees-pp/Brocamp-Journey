size = int(input("Enter the size of arrays (number of rows/columns): "))

def input_matrix(size, array_num):
    print(f"\nEnter the values of array {array_num}:")
    matrix = []
    for i in range(size):
        row = list(map(int, input().split()))
        matrix.append(row)
    return matrix

def add_matrices(matrix1, matrix2, size):
    result = []
    for i in range(size):
        row = []
        for j in range(size):
            row.append(matrix1[i][j] + matrix2[i][j])
        result.append(row)
    return result

matrix1 = input_matrix(size, 1)
matrix2 = input_matrix(size, 2)

sum_matrix = add_matrices(matrix1, matrix2, size)

print("\nSum of 2 arrays is:")
for row in sum_matrix:
    print(" ".join(map(str, row)))
