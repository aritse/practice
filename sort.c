#include <stdio.h>
#include <stdlib.h>

void swap_by_value(int A[], int i, int j)
{
    int temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

void swap_by_ref(int *i, int *j)
{
    int temp = *i;
    *i = *j;
    *j = temp;
}

void bubble_sort(int A[], int n)
{
    /* Bubble sort is based on the idea of repeatedly comparing
    pairs of adjacent elements and then swapping their positions
    if they exist in the wrong order. */
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n - i - 1; j++)
            if (A[j] > A[j + 1])
                swap_by_value(A, i, j);
}

void selection_sort(int A[], int n)
{
    /* The Selection sort algorithm is based on the idea of finding
    the minimum or maximum element in an unsorted array and then
    putting it in its correct position in a sorted array. */
    for (int i = 0; i < n - 1; i++)
    {
        int min = i;
        for (int j = i + 1; j < n; j++)
            if (A[j] < A[min])
                min = j;
        swap_by_ref(&A[i], &A[min]);
    }
}

void insertion_sort(int A[], int n)
{
    /* Insertion sort is based on the idea that one element from  the
    input elements is consumed in each iteration to find its correct
    position i.e, the position to which it belongs in a sorted array. */
    for (int i = 0; i < n; i++)
        for (int j = i; j > 0; j--)
        {
            if (A[j] >= A[j - 1])
                break;
            swap_by_ref(&A[j], &A[j - 1]);
        }
}

void merge(int A[], int start, int mid, int end)
{
    int p = start, q = mid + 1;
    int T[end - start + 1], k = 0;

    for (int i = start; i <= end; i++)
    {
        if (p > mid)
            T[k++] = A[q++];
        else if (q > end)
            T[k++] = A[p++];
        else if (A[p] < A[q])
            T[k++] = A[p++];
        else
            T[k++] = A[q++];
    }

    for (int i = 0; i < k; i++)
        A[start++] = T[i];
}

void merge_sort(int A[], int start, int end)
{
    /* Merge sort is a divide-and-conquer algorithm based on the idea of
    breaking down a list into several sub-lists until each sublist consists
    of a single element and merging those sublists in a manner that
    results into a sorted list. */
    if (start < end)
    {
        int mid = (start + end) / 2;
        merge_sort(A, start, mid);
        merge_sort(A, mid + 1, end);
        merge(A, start, mid, end);
    }
}

int partition(int A[], int start, int end)
{
    int pivot = A[start], i = start + 1;

    for (int j = i; j <= end; j++)
        if (A[j] < pivot)
            swap_by_ref(&A[i++], &A[j]);
    swap_by_ref(&A[start], &A[i - 1]);
    return i - 1;
}

int random_partition(int A[], int start, int end)
{
    int random = start + rand() % (end - start + 1);
    swap_by_ref(&A[start], &A[random]);
    return partition(A, start, end);
}

void quick_sort(int A[], int start, int end)
{
    if (start < end)
    {
        int pivot = random_partition(A, start, end);
        quick_sort(A, start, pivot - 1);
        quick_sort(A, pivot + 1, end);
    }
}

int main()
{
    int n = 10, A[n];

    printf("Unsorted:\n");
    for (int i = 0; i < n; i++)
    {
        A[i] = rand() % 10;
        printf("%d ", A[i]);
    }
    printf("\n");

    // printf("\nBubble Sort:\n");
    // bubble_sort(A, n);

    // printf("\nSelection Sort:\n");
    // selection_sort(A, n);

    // printf("\nInsertion Sort:\n");
    // insertion_sort(A, n);

    // printf("\nMerge Sort:\n");
    // merge_sort(A, 0, n - 1);

    printf("\nQuick Sort:\n");
    quick_sort(A, 0, n - 1);

    for (int i = 0; i < n; i++)
        printf("%d ", A[i]);
    printf("\n");
}