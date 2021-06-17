// @ts-ignore
const { MAX_SAFE_INTEGER } = Number;

let prevFibonacci2: number = 0;
let prevFibonacci1: number = 1;
let currentFibonacci: number = 0;

while(currentFibonacci < MAX_SAFE_INTEGER) {
	currentFibonacci = prevFibonacci1 + prevFibonacci2;

	console.log(`${currentFibonacci}\n`);
	prevFibonacci2 = prevFibonacci1;
	prevFibonacci1 = currentFibonacci;
}