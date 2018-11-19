#include <stdio.h>
int main()
{
    int t;
    scanf("%d", &t);
    while (t--)
    {
        int n, l, flag = 0;
        scanf("%d%d", &n, &l);
        int a[n][2];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < 2; j++)
                scanf("%d", &a[i][j]);
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (a[j][1] - a[i][0] == l &&
                    a[j][0] >= a[i][0] &&
                    a[i][1] <= a[j][1])
                {
                    flag++;
                    break;
                }
            }
        }
        if (flag == 0)
            printf("No\n");
        else
            printf("Yes\n");
    }
}