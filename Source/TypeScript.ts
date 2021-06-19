// For this to work, you need to have Lib option to be set to ESNext or ES2020 (Might accept others too but I am not sure, but it doesn't support ES5, I'm sure about that)
let prevFibonacci2: bigint = BigInt("0");
let prevFibonacci1: bigint = BigInt("1");
let currentFibonacci: bigint = BigInt("0");

while(true) {
	currentFibonacci = prevFibonacci1 + prevFibonacci2;

	console.log(`${currentFibonacci.toString()}\n`);
	prevFibonacci2 = prevFibonacci1;
	prevFibonacci1 = currentFibonacci;
}

// Goes on till infinity, or atleast till we continue the program or the memory goes booom

// The following code is kinda better, use this one if you want to run the code after some fixed time, like every second or 2nd second etc

// setInterval(() => {
// 	currentFibonacci = prevFibonacci1 + prevFibonacci2;

// 	console.log(`${currentFibonacci.toString()}\n`);
// 	prevFibonacci2 = prevFibonacci1;
// 	prevFibonacci1 = currentFibonacci;
// }, 1000);
// Timeout is in Miliseconds, so set it accordingly
