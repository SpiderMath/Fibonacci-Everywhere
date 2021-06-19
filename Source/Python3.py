# import time

previous_fibonacci_1 = 1
previous_fibonacci_2 = 0
currentFibonacci = 0

while True:
	currentFibonacci = previous_fibonacci_1 + previous_fibonacci_2
	print(currentFibonacci)
	# time.sleep(1)
	# Time is in seconds, change it to whatever you want if you require it to be to leave it commented 🤷‍♂️ 
	# Warning: It will literally blow your terminal off
	previous_fibonacci_2 = previous_fibonacci_1
	previous_fibonacci_1 = currentFibonacci