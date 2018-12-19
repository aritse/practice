/*

The government of virtualBit believes that the health of its citizens is the highest priority. It has devised an N-day health plan. During these N days, the citizens are encouraged to go to the gym for workouts.

A person may or may not go to the gym on any day. The people of virtualBit are a lazy lot, and they don't want to go to the gym for more than one consecutive day. Given the number of days N, print the number of ways the N-day plan can be completed.

Note that it is possible to not go to the gym on any day at all and still complete the plan.

Input

The first line contains T, the number of test cases.

Each test case contains a number N denoting the number of days.

Output

Each test case contains a single number denoting the number of ways by which the N-day plan may be completed.

Output your answer modulo 109+7.

Constraints

1 <= T <= 60000

1 <= N <= 1018

*/

/*
Approach 1: When N < 1000000, use bottom-up DP
*/

// #include <stdio.h>
// #define M 1000000007
// #define N 1000000

// int main()
// {
//     unsigned long w[N] = {0};
//     w[1] = 2;
//     w[2] = 3;

//     unsigned short t;
//     scanf("%hu", &t);
//     while (t--)
//     {
//         unsigned long long i, n;
//         scanf("%llu", &n);
//         if (n > 2)
//             if (w[n - 1] && w[n - 2])
//                 w[n] = (w[n - 1] + w[n - 2]) % M;
//             else
//                 for (i = 3; i <= n; i++)
//                     w[i] = (w[i - 1] + w[i - 2]) % M;
//         printf("%lu\n", w[n]);
//     }
// }

/*
Approach 2: When N <= 10^18, use matrix-exponentation.
*/

#include <stdio.h>
#define ll long long int
#define MOD 1000000007
#define MAX 1e3
ll fib(ll n)
{
    ll f[2][2] = {{1, 1}, {1, 0}}, ret[2][2] = {{1, 1}, {0, 1}}, tmp[2][2] = {{0, 0}, {0, 0}};
    int i, j, k;
    while (n)
    {
        if (n & 1)
        {
            memset(tmp, 0, sizeof tmp);
            for (i = 0; i < 2; i++)
                for (j = 0; j < 2; j++)
                    for (k = 0; k < 2; k++)
                        tmp[i][j] = (tmp[i][j] + ret[i][k] * f[k][j]) % MOD;
            for (i = 0; i < 2; i++)
                for (j = 0; j < 2; j++)
                    ret[i][j] = tmp[i][j];
        }
        memset(tmp, 0, sizeof tmp);
        for (i = 0; i < 2; i++)
            for (j = 0; j < 2; j++)
                for (k = 0; k < 2; k++)
                    tmp[i][j] = (tmp[i][j] + f[i][k] * f[k][j]) % MOD;
        for (i = 0; i < 2; i++)
            for (j = 0; j < 2; j++)
                f[i][j] = tmp[i][j];
        n /= 2;
    }
    return (ret[0][1]) % MOD;
}

int main()
{
    int n;
    scanf("%d", &n);
    long long i, k;
    while (n--)
    {
        ll a;
        scanf("%lld", &a);
        printf("%d\n", fib(a + 1));
    }
}