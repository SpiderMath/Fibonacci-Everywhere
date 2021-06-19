fn main() {
	// I know we can use the external crate num and use BigInt but that needs a project setup and whatnot, 
	// so I am using u128 as the 2nd largest option [It isn't too large though]
	// This program breaks on overflow on its own, so no tension
	let mut current_fibonacci: u128;
	let mut previous_fibonacci_1: u128 = 1;
	let mut previous_fibonacci_2: u128 = 0;

	loop {
		current_fibonacci = previous_fibonacci_1 + previous_fibonacci_2;

		// If you want your code to go a bit slow then you can uncomment the following line, the function takes in (seconds, nanoseconds) for your information
		// std::thread::sleep(std::time::Duration::new(1, 0));

		println!("{}\n", current_fibonacci);

		previous_fibonacci_1 = previous_fibonacci_2;
		previous_fibonacci_2 = current_fibonacci;
	}
}