#include <stdio.h>
#include <conio.h>
// #include <time.h>

// void timeout (int seconds)
// {
// 	clock_t endwait;
// 	endwait = clock() + seconds * CLOCKS_PER_SEC ;
// 	while (clock() < endwait) {}
// }

int main() {
	unsigned long long int currentFibonacci = 0;
	unsigned long long int prevFibonacci1 = 1;
	unsigned long long int prevFibonacci2 = 0;

	while(1 == 1) {
		currentFibonacci = prevFibonacci1 + prevFibonacci2;

		// timeout(1);
		// Timeout time has to be in Seconds

		if(currentFibonacci < prevFibonacci1) break;

		printf("%Lu\n", currentFibonacci);

		prevFibonacci2 = prevFibonacci1;
		prevFibonacci1 = currentFibonacci;
	}
}