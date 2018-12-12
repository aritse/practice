// Given an integer N, print the factorial of the N (mod ).

// Input:
// First line contains one integer, T, number of test cases.
// Each test case contains one integer, N.

// Output:
// For each test case you need to print the factorial of N (mod ).

#include <stdio.h>
#define M 1000000007
#define N 100001

int main()
{
    long f[N];
    f[0] = f[1] = 1;
    for (int i = 2; i < N; i++)
        f[i] = 0;

    int t;
    scanf("%d", &t);
    while (t--)
    {
        int n;
        scanf("%d", &n);
        if (n > 1)
            if (f[n - 1])
                f[n] = n * f[n - 1] % M;
            else
                for (int i = 2; i < n; i++)
                    f[i] = (i + 1) * f[i - 1] % M;
        printf("%d\n", f[n]);
    }
}