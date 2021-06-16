using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Text;
// using System.Threading.Tasks;

namespace app
{
    class Fibonacci
    {
        static int Fib(int n)
        {
            return n > 1 ? Fib(n-1) + Fib(n-2) : n
        }
    }
}