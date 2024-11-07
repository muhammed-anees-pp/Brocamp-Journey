import threading
import time

def print_numbers():
    for i in range(1, 6):
        print(f"Number: {i}")
        time.sleep(1)  # Wait for 1 second

def print_letters():
    for letter in ['A', 'B', 'C', 'D', 'E']:
        print(f"Letter: {letter}")
        time.sleep(1)  # Wait for 1 second

# Create two threads, each running a different function
thread1 = threading.Thread(target=print_numbers)
thread2 = threading.Thread(target=print_letters)

# Start both threads
thread1.start()
thread2.start()

# Wait until both threads are done
thread1.join()
thread2.join()

print("Both tasks are done!")
