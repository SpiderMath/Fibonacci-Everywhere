previousFibonacci1 = BigInt(1);
previousFibonacci2 = BigInt(0);
currentFibonacci = BigInt(0);

# Uncomment the commented out code if you want to like, have a timeout between generation of every number.
# sleep = (ms) ->
#   start = new Date().getTime()
#   continue while new Date().getTime() - start < ms

while true
	# The parameter is the number of miliseconds you want the code to wait for, before continuing
	# sleep(1000)
	currentFibonacci = previousFibonacci1 + previousFibonacci2
	console.log currentFibonacci.toString() + "\n";
	previousFibonacci2 = previousFibonacci1;
	previousFibonacci1 = currentFibonacci;