#include <stdio.h>

int min(int a, int b)
{
    return a < b ? a : b;
}

int max(int a, int b)
{
    return a > b ? a : b;
}

void swap(int A[], int i, int j)
{
    int temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

void quick_sort(int A[], int left, int right)
{
    int mid = (left + right) / 2;
    int i = left, j = right, val = A[mid];
    do
    {
        while (A[i] < val)
            i++;
        while (A[j] > val)
            j--;
        if (i <= j)
        {
            swap(A, i, j);
            i++;
            j--;
        }
    } while (i <= j);

    if (i < right)
        quick_sort(A, i, right);
    if (left < j)
        quick_sort(A, left, j);
}

void main()
{
    int num_of_test_cases;
    scanf("%d", &num_of_test_cases);
    while (num_of_test_cases--)
    {
        // Read input
        int n;
        scanf("%d", &n);
        int costs[n];
        for (int i = 0; i < n; i++)
            scanf("%d", &costs[i]);

        // Sort costs
        quick_sort(costs, 0, n - 1);

        unsigned long total_cost = 0, i = n - 1;
        while (i > 2)
        {
            // There are two ways to send two costliest people to kingdom.
            // 1. Least costly person drives them */
            int cost1 = costs[i] + costs[0] + costs[i - 1] + costs[0];
            // 2. Send 2 least costly people first and then 2 costliest
            int cost2 = costs[1] + costs[0] + costs[i] + costs[1];
            total_cost += min(cost1, cost2);
            i -= 2;
        }
        if (i == 2)
            total_cost += (costs[0] + costs[1] + costs[2]);
        else if (i == 1)
            total_cost += max(costs[0], costs[1]);
        else
            total_cost += costs[0];
        printf("%lu\n", total_cost);
    }
}