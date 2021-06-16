function fib(n: number): number {
    if(n > 1) return fib(n-1) + fib(n-2);
    else return n;
}