from datetime import datetime

current_time = datetime.now().time()
# time_format = current_time.strftime("%H:%M:%S") # time in 24 hour format
time_format = current_time.strftime("%I:%M:%S %p") # time in 12 hour format

today = datetime.now().date()
date_format = today.strftime("%d-%B-%Y")
print("Time: ",time_format)
print("Day: ",date_format)