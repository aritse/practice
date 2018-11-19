/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *spiralOrder(int **matrix, int matrixRowSize, int matrixColSize)
{
    int *arr = (int *)malloc(sizeof(int) * matrixRowSize * matrixColSize);
    int r = 0, c = 0, direction = 1, twist = 0;
    for (int i = 0; i < matrixColSize * matrixRowSize; i++)
    {
        arr[i] = matrix[r][c];
        switch (direction)
        {
        case 1: // right
            if (c >= matrixColSize - 1 - twist)
            {
                direction = 2;
                r++;
            }
            else
            {
                c++;
            }
            break;
        case 2: // down
            if (r >= matrixRowSize - 1 - twist)
            {
                direction = 4;
                c--;
            }
            else
            {
                r++;
            }
            break;
        case 4: // left
            if (c <= 0 + twist)
            {
                direction = 8;
                r--;
            }
            else
            {
                c--;
            }
            break;
        case 8: // up
            if (r <= 1 + twist)
            {
                direction = 1;
                c++;
                twist++; // made one full twist
            }
            else
            {
                r--;
            }
            break;
        default:
            exit(1);
        }
    }
    return arr;
}