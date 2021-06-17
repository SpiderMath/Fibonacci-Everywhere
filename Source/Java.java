import java.math.BigInteger;

class Fibonacci {
	public static void main(String[] args) {
		BigInteger currentFibonacci = new BigInteger("0");
		BigInteger previousFibonacci1 = new BigInteger("1");
		BigInteger previousFibonacci2 = new BigInteger("0");

		while(true) {
			currentFibonacci = previousFibonacci1.add(previousFibonacci2);

			System.out.println(currentFibonacci + "\n");

			previousFibonacci2 = previousFibonacci1;
			previousFibonacci1 = currentFibonacci;
			// This will continue till infinity or computer goes out of rage [or till you stop the program]
		}
	}
}