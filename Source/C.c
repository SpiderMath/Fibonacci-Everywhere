#include <stdio.h>
#include <conio.h>

int main() {
	unsigned long long int currentFibonacci = 0;
	unsigned long long int prevFibonacci1 = 1;
	unsigned long long int prevFibonacci2 = 0;

	while(1 == 1) {
		currentFibonacci = prevFibonacci1 + prevFibonacci2;

		if(currentFibonacci < prevFibonacci1) break;

		printf("%Lu\n", currentFibonacci);

		prevFibonacci2 = prevFibonacci1;
		prevFibonacci1 = currentFibonacci;
	}
}