import java.math.BigInteger;

var currentFibonacci = BigInteger.ZERO;
var previousFibonacci1 = BigInteger.ONE;
var previousFibonacci2 = BigInteger.ZERO;

fun main() {
	while(true) {
		currentFibonacci = previousFibonacci1.add(previousFibonacci2);
		Thread.sleep(1000);

		println(currentFibonacci);
		println("");

		previousFibonacci2 = previousFibonacci1;
		previousFibonacci1 = currentFibonacci;
	}
}