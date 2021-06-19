using System;
using System.Numerics;

class Fibonacci
{
	static void Main()
	{
		BigInteger previousFibonacci1 = new BigInteger(1);
		BigInteger previousFibonacci2 = new BigInteger(0);

		while (true)
		{
			BigInteger currentFibonacci = BigInteger.Add(previousFibonacci1, previousFibonacci2);

			Console.WriteLine(currentFibonacci.ToString("R") + "\n");

			previousFibonacci2 = previousFibonacci1;
			previousFibonacci1 = currentFibonacci;
		}
	}
}
