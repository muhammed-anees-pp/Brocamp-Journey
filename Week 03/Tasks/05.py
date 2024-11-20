mark = float(input("Enter the marks: "))

if mark>=90:
    print("A Grade")
elif mark<90 and mark>=80:
    print("B Grade")
elif mark<80 and mark>=70:
    print("C Grade")
elif mark<70 and mark>=60:
    print("D Grade")
elif mark<60 and mark>=50:
    print("E Grade")
else:
    print("You are failed")