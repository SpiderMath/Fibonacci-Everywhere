previousFibonacci1 = BigInt(1);
previousFibonacci2 = BigInt(0);
currentFibonacci = BigInt(0);

while true
	currentFibonacci = previousFibonacci1 + previousFibonacci2
	console.log currentFibonacci.toString() + "\n";
	previousFibonacci2 = previousFibonacci1;
	previousFibonacci1 = currentFibonacci;