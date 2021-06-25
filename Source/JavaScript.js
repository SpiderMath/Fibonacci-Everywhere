let prevFibonacci2 = BigInt("0");
let prevFibonacci1 = BigInt("1");
let currentFibonacci = BigInt("0");

// Uncomment the following code, to let your computer rest a bit before continuing
// function sleep(ms) {
// 	const start = new Date().getTime();
// 	while(new Date().getTime() - start < ms) continue;
// }

while(true) {
	// Uncomment the following line too, if you want the timeout to work. Remember that the input is in MILISECONDS not seconds
	// sleep(1000);

	currentFibonacci = prevFibonacci1 + prevFibonacci2;

	console.log(`${currentFibonacci.toString()}\n`);
	prevFibonacci2 = prevFibonacci1;
	prevFibonacci1 = currentFibonacci;
}

// Goes on till infinity, or atleast till we continue the program or the memory goes booom
