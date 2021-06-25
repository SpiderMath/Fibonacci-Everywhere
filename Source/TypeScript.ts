// For this to work, you need to have Lib option to be set to ESNext or ES2020 (Might accept others too but I am not sure, but it doesn't support ES5, I'm sure about that)
let prevFibonacci2: bigint = BigInt("0");
let prevFibonacci1: bigint = BigInt("1");
let currentFibonacci: bigint = BigInt("0");

// Uncomment the commented out code, if you require your computer to wait a bit before continuing
// function sleep(ms: number) {
// 	const start = new Date().getTime();
// 	while(new Date().getTime() - start < ms) continue;
// }

while(true) {
	// The parameter takes in miliseconds
	// sleep(1000);
	currentFibonacci = prevFibonacci1 + prevFibonacci2;

	console.log(`${currentFibonacci.toString()}\n`);
	prevFibonacci2 = prevFibonacci1;
	prevFibonacci1 = currentFibonacci;
}

// Goes on till infinity, or atleast till we continue the program or the memory goes booom