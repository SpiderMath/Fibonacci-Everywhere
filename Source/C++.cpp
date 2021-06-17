#include <iostream>

int main() {
	long long int currentFibonacci = 0;
	long long int prevFibonacci1 = 1;
	long long int prevFibonacci2 = 0;

	while(true) {
		currentFibonacci = prevFibonacci1 + prevFibonacci2;

		if(currentFibonacci < 0) break;

		std::cout << currentFibonacci << "\n";

		prevFibonacci2 = prevFibonacci1;
		prevFibonacci1 = currentFibonacci;
	}
}