class Fibonacci {
	public static void main(String[] args) {
		int currentFibonacci = 0;
		int previousFibonacci1 = 1;
		int previousFibonacci2 = 0;

		while(true) {
			currentFibonacci = previousFibonacci1 + previousFibonacci2;

			if(currentFibonacci < 0) break;
			System.out.println(currentFibonacci);

			previousFibonacci2 = previousFibonacci1;
			previousFibonacci1 = currentFibonacci;
		}
	}
}