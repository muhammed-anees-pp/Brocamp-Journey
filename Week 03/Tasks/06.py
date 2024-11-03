day_index = int(input("Enter a number (1-7): "))

days = {1: "Sunday", 2: "Monday", 3: "Tuesday", 4: "Wednesday", 5: "Thursday", 6: "Friday",7: "Saturday"}

if day_index in days:
    print(days[day_index])
else:
    print("Invalid Entry")