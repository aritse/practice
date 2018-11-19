#include <stdio.h>

int main()
{
    // Read matrix input
    int n;
    scanf("%d", &n);
    int matrix[n][n], len = n * n, array[len];
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            scanf("%d", &matrix[i][j]);
        }
    }

    // Vectorize matrix
    int l = 0;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            array[l++] = matrix[i][j];
        }
    }

    // Sort array
    int temp;
    for (int i = 0; i < len; i++)
    {
        for (int j = 0; j < len - i - 1; j++)
        {
            if (array[j] > array[j + 1])
            {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    // Roll array into matrix
    int i = 0, j = 0, twist = 0, direction = 1; // 1:right, 2:down, 4:left, 8:up
    for (int l = 0; l < len; l++)
    {
        matrix[i][j] = array[l]; // insert l-th element at current i and j
        switch (direction)
        {
        case 1:
            if (j >= n - 1 - twist)
            {
                direction = 2;
                i++;
            }
            else
            {
                j++;
            }
            break;
        case 2:
            if (i >= n - 1 - twist)
            {
                direction = 4;
                j--;
            }
            else
            {
                i++;
            }
            break;
        case 4:
            if (j <= 0 + twist)
            {
                direction = 8;
                i--;
            }
            else
            {
                j--;
            }
            break;
        case 8:
            if (i <= 1 + twist)
            {
                direction = 1;
                j++;
                twist++; // made one full twist
            }
            else
            {
                i--;
            }
            break;
        default:
            exit(1);
        }
    }

    // Print twisted matrix
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
}