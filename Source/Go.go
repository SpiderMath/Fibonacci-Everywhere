package main

import (
	"fmt"
	"math/big"
	"time"
)

func main() {
	previous_fibonacci_1 := big.NewInt(1)
	previous_fibonacci_2 := big.NewInt(0)

	for {
		current_fibonacci := big.NewInt(0)
		time.Sleep(time.Millisecond * 500)
		current_fibonacci.Add(previous_fibonacci_2, previous_fibonacci_1)

		fmt.Println("\n", current_fibonacci)

		previous_fibonacci_1 = previous_fibonacci_2
		previous_fibonacci_2 = current_fibonacci
	}
}
