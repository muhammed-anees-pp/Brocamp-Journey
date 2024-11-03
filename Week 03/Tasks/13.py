print("Enter the marks\n")
written_mark = int(input("Enter the written mark: "))
lab_mark = int(input("Enter the lab exam mark: "))
assignments = int(input("Enter the assignment mark: "))

weighted_average = float((written_mark*70)/100 + (lab_mark*20)/100 + (assignments*10)/100)

print(f"\nGrade of the student is {weighted_average}")
