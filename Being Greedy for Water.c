/*
You are given container full of water. Container can have limited amount of water. You also have N bottles to fill. You need to find the maximum numbers of bottles you can fill.

Input:
First line contains one integer, T, number of test cases.
First line of each test case contains two integer, N and X, number of bottles and capacity of the container.
Second line of each test case contains N space separated integers, capacities of bottles.

Output:
For each test case print the maximum number of bottles you can fill.
*/

#include <stdio.h>
#include <stdlib.h>

int comp(const void *a, const void *b)
{
    int *x = (int *)a;
    int *y = (int *)b;
    return *x - *y;
}

int main()
{
    int t;
    scanf("%d", &t);
    while (t--)
    {
        int n, x;
        scanf("%d %d", &n, &x);
        int B[n];
        for (int i = 0; i < n; i++)
        {
            scanf("%d", &B[i]);
        }

        qsort(B, sizeof(B) / sizeof(*B), sizeof(*B), comp);

        int num_of_bottles = 0;
        int leftover = x;
        for (int i = 0; i < n; i++)
        {
            leftover -= B[i];
            if (leftover < 0)
                break;
            num_of_bottles++;
        }
        printf("%d\n", num_of_bottles);
    }
}