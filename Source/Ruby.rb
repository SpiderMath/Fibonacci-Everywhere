previousFibonacci1 = 1
previousFibonacci2 = 0

while true
	currentFibonacci = previousFibonacci1 + previousFibonacci2

	puts currentFibonacci

	previousFibonacci2 = previousFibonacci1
	previousFibonacci1 = currentFibonacci
end