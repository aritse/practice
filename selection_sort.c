#include <stdio.h>
#include <stdlib.h>

void swap(int A[], int i, int j)
{
    int temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

void selection_sort(int A[], int n)
{
    for (int i = 0; i < n - 1; i++)
    {
        int min = A[i];
        for (int j = i + 1; j < n; j++)
            if (A[j] < A[i])
                swap(A, i, j);
    }
}

int main()
{
    int n = 20, A[n];
    for (int i = 0; i < n; i++)
    {
        A[i] = rand() % 10;
        printf("%d ", A[i]);
    }
    selection_sort(A, n);
    printf("\n");
    for (int i = 0; i < n; i++)
        printf("%d ", A[i]);
    printf("\n");
}