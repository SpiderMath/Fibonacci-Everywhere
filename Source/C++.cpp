#include <iostream>
// If you wanna like wait for some time before moving on to the next number, uncomment the commented code
// #include <time.h>

// void timeout (int seconds)
// {
// 	clock_t endwait;
// 	endwait = clock() + seconds * CLOCKS_PER_SEC ;
// 	while (clock() < endwait) {}
// }

int main() 
{
	unsigned long long int currentFibonacci = 0;
	unsigned long long int prevFibonacci1 = 1;
	unsigned long long int prevFibonacci2 = 0;

	while(true)
	{
		currentFibonacci = prevFibonacci1 + prevFibonacci2;

		// timeout(1);
		// Timeout time has to be in Seconds

		if(currentFibonacci < prevFibonacci1) break;

		std::cout << currentFibonacci << "\n";

		prevFibonacci2 = prevFibonacci1;
		prevFibonacci1 = currentFibonacci;
	}
}