previousFibonacci1 = 1
previousFibonacci2 = 0

while true
	# Uncomment the following line of code, if you want to like make the program sleep for a sec before going on to the next one. The parameter takes in Seconds BTW
	# sleep(1)
	currentFibonacci = previousFibonacci1 + previousFibonacci2

	puts currentFibonacci
	puts "\n"

	previousFibonacci2 = previousFibonacci1
	previousFibonacci1 = currentFibonacci
end