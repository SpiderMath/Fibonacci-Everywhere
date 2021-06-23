using System;
using System.Numerics;
// Uncomment the commented out code to wait for a bit to generate the new number
// using System.Threading;

public class Fibonacci
{
	public static void Main()
	{
		BigInteger previousFibonacci1 = new BigInteger(1);
		BigInteger previousFibonacci2 = new BigInteger(0);

		while (true)
		{
			// Takes in time in Miliseconds. Uncomment the following line if you want the program to wait for a while before continuing
			// Thread.Sleep(1000);
			BigInteger currentFibonacci = BigInteger.Add(previousFibonacci1, previousFibonacci2);

			Console.WriteLine(currentFibonacci.ToString("R") + "\n");

			previousFibonacci2 = previousFibonacci1;
			previousFibonacci1 = currentFibonacci;
		}
	}
}
