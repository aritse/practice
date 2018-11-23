#include <stdio.h>
#include <stdlib.h>

void bubble_sort(int A[], int n)
{
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n - i - 1; j++)
            if (A[j] > A[j + 1])
            {
                int temp = A[j + 1];
                A[j + 1] = A[j];
                A[j] = temp;
            }
}

// int main()
// {
//     int n;
//     printf("Enter array size: ");
//     scanf("%d", &n);
//     printf("Enter %d space separated integers:\n", n);

//     int A[n];
//     for (int i = 0; i < n; i++)
//         scanf("%d", &A[i]);

//     bubble_sort(A, n);

//     printf("Sorted array:\n");
//     for (int i = 0; i < n; i++)
//         printf("%d ", A[i]);
//     printf("\n");
// }

int main()
{
    int n = 10, A[n];

    for (int i = 0; i < n; i++)
    {
        A[i] = rand() % 10;
        printf("%d ", A[i]);
    }
    printf("\n");
    bubble_sort(A, n);
    for (int i = 0; i < n; i++)
        printf("%d ", A[i]);
    printf("\n");
}