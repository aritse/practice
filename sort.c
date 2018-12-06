#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#define OUTPUT

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
    /* Quick sort is based on the divide-and-conquer approach based on
    the idea of choosing one element as a pivot element and partitioning
    the array around it such that: Left side of pivot contains all
    the elements that are less than the pivot element
    Right side contains all elements greater than the pivot. */

    if (start < end)
    {
        int pivot = random_partition(A, start, end);
        quick_sort(A, start, pivot - 1);
        quick_sort(A, pivot + 1, end);
    }
}

void counting_sort(int A[], int n)
{
    /* In Counting sort, the frequencies of distinct elements of the array
    to be sorted is counted and stored in an auxiliary array, by mapping
    its value as an index of the auxiliary array. */

    // find max
    int k = 0;
    for (int i = 0; i < n; i++)
        if (A[i] > k)
            k = A[i];

    // initialize auxiliary array
    int B[k + 1];
    for (int i = 0; i <= k; i++)
        B[i] = 0;

    // count frequencies
    for (int i = 0; i < n; i++)
        B[A[i]]++;

    // traverse B
    int j = 0;
    for (int i = 0; i <= k; i++)
    {
        int freq = B[i];
        while (freq--)
            A[j++] = i;
    }
}

void max_heapify(int A[], int n, int i)
{
    int largest = i, l = (i << 1) + 1, r = (i + 1) << 1;

    if (l < n && A[l] > A[largest])
        largest = l;
    if (r < n && A[r] > A[largest])
        largest = r;
    if (largest != i)
    {
        swap_by_ref(&A[largest], &A[i]);
        max_heapify(A, n, largest);
    }
}

void heap_sort(int A[], int n)
{
    /* Heaps can be used in sorting an array. In max-heaps, maximum element
    will always be at the root. Heap Sort uses this property of heap to
    sort the array. The heap root in array representation is the index 0. */
    for (int i = n / 2 - 1; i >= 0; i--)
        /* In a complete binary tree, (n/2 - 1) is the index of the last
        non-leaf node. Here, we build a max heap in a bottom-up fashion. */
        max_heapify(A, n, i);

    for (int i = n - 1; i >= 0; i--)
    {
        // A[0] is the max. Swap and re-heapify with an array reduced by one.
        swap_by_ref(&A[0], &A[i]);
        max_heapify(A, i, 0); // bring the max element at the root
    }
}

int main()
{
    int n = 20, A[n];
    clock_t start = clock();

    for (int i = 0; i < n; i++)
    {
        A[i] = rand() % n;
        printf("%d ", A[i]);
    }
    printf("\n");

    // bubble_sort(A, n);
    // selection_sort(A, n);
    // insertion_sort(A, n);
    // merge_sort(A, 0, n - 1);
    // quick_sort(A, 0, n - 1);
    // counting_sort(A, n);
    printf("heap sort:\n");
    heap_sort(A, n);

#ifdef OUTPUT
    for (int i = 0; i < n; i++)
        printf("%d ", A[i]);
    printf("\n");
#endif
    clock_t stop = clock();
    printf("\nRunning time: %lu\n", stop - start);
}