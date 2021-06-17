#include <iostream>

int main() {
	unsigned long long int currentFibonacci = 0;
	unsigned long long int prevFibonacci1 = 1;
	unsigned long long int prevFibonacci2 = 0;

	while(true) {
		currentFibonacci = prevFibonacci1 + prevFibonacci2;

		if(currentFibonacci < prevFibonacci1) break;

		std::cout << currentFibonacci << "\n";

		prevFibonacci2 = prevFibonacci1;
		prevFibonacci1 = currentFibonacci;
	}
}