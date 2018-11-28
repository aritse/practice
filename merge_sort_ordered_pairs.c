#include <stdio.h>
#include <stdlib.h>

long result = 0;

void merge(int A[], int start, int mid, int end)
{
    int p = start, q = mid + 1;
    int T[end - start + 1], k = 0;

    for (int i = start; i < end + 1; i++)
    {
        if (p > mid)
            T[k++] = A[q++];
        else if (q > end)
            T[k++] = A[p++];
        else if (A[p] > A[q])
        {
            result += mid - p + 1;
            T[k++] = A[q++];
        }
        else
            T[k++] = A[p++];
    }

    for (int i = 0; i < k; i++)
        A[start++] = T[i];
}

void merge_sort(int A[], int start, int end)
{
    if (start < end)
    {
        int mid = (start + end) / 2;

        merge_sort(A, start, mid);
        merge_sort(A, mid + 1, end);
        merge(A, start, mid, end);
    }
}

int main()
{
    int n;
    scanf("%d", &n);
    int A[n];
    for (int i = 0; i < n; i++)
        scanf("%d", &A[i]);
    merge_sort(A, 0, n - 1);

    printf("%ld\n", result);
}