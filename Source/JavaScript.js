let prevFibonacci2 = BigInt("0");
let prevFibonacci1 = BigInt("1");
let currentFibonacci = BigInt("0");

while(true) {
	currentFibonacci = prevFibonacci1 + prevFibonacci2;

	console.log(`${currentFibonacci.toString()}\n`);
	prevFibonacci2 = prevFibonacci1;
	prevFibonacci1 = currentFibonacci;
}

// Goes on till infinity, or atleast till we continue the program or the memory goes booom