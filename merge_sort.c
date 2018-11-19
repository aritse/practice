void merge(int A[], int start, int mid, int end)
{
    int p = start, q = mid + 1;
    int B[end - start + 1], k = 0;

    for (int i = start; i <= end; i++)
    {
        if (p > mid || A[p] > A[q])
            B[k++] = A[q++];
        else
            B[k++] = A[p++];
    }
    for (int p = 0; p < k; p++)
        A[start++] = B[p];
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