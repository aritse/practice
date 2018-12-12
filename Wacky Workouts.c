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

#include <stdio.h>
#define M 1000000007
#define N 1000000

int main()
{
    unsigned long w[N] = {0};
    w[1] = 2;
    w[2] = 3;

    unsigned short t;
    scanf("%hu", &t);
    while (t--)
    {
        unsigned long long i, n;
        scanf("%llu", &n);
        if (n > 2)
            if (w[n - 1] && w[n - 2])
                w[n] = (w[n - 1] + w[n - 2]) % M;
            else
                for (i = 3; i <= n; i++)
                    w[i] = (w[i - 1] + w[i - 2]) % M;
        printf("%lu\n", w[n]);
    }
}