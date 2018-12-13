/*
Limak is a brown bear. Brown bears often climb trees and so does Limak. As you probably know, bears use ropes to move between tops of trees.

There are N trees in a row. i-th of them grows at coordinate X[i] and has height H[i]. A further tree is always higher - it's guaranteed that X[i] < X[i+1] and H[i] < H[i+1].

Limak is currently at the top of the first tree and he has a rope of length L. He wants to be at the top of the last tree. He can move from a-th to b-th tree if and only if all tree conditions are fulfilled:
1) a < b
2) (X[b]-X[a])^2 + (H[b]-H[a])^2 <= L - rope must be long enough
3) H[b]-H[a] < X[b]-X[a] - it's not safe to go very uphill

Note that there is no square root in the second condition. The reason is that bears calculate distances a bit different than people.

Limak doesn't know if his rope is long enough. Could you help him and calculate the minimum L for which he can get from the first tree to the last one? Print -1 instead if there is no L for which Limak would reach the last tree.

Input format:

The first line contains one integer number N, denoting number of trees. i-th of the next N lines contains two integer numbers X[i] and H[i], describing i-th tree.

Output format:

In the single line print the minimum possible L for which Limak would be able to get from the first to the last tree. If there is no such L, print -1 instead.

Constraints:

2 <= N <= 10^6
1 <= X[i], H[i] <= 10^7
X[i] < X[i+1]
H[i] < H[i+1]
*/

#include <stdio.h>
#include <math.h>
#include <stdlib.h>

#include <stdio.h>
#include <math.h>
#include <stdlib.h>

#define MAX(x, y) x > y ? x : y
#define MIN(x, y) x < y ? x : y

int minimize_l(int start, int end, int L[][end])
{
    if (start > end)
        return -1;
    int l = L[start][end];
    if (l > 0)
        for (int i = start + 1; i < end; i++)
            l = MIN(l, MAX(L[start][i], minimize_l(i, end, L)));
    return l;
}

int main()
{
    // Read input
    int num_trees;
    scanf("%d", &num_trees);
    int X[num_trees], H[num_trees];
    for (int i = 0; i < num_trees; i++)
        scanf("%d %d", &X[i], &H[i]);

    // Calculate rope length for a direct move between a and b
    int L[num_trees][num_trees];
    for (int a = 0; a < num_trees; a++)
        for (int b = 0; b < num_trees; b++)
            if (a == b)
                L[a][b] = 0;
            else
            {
                int dx = abs(X[b] - X[a]);
                int dh = abs(H[b] - H[a]);
                L[a][b] = dx > dh ? pow(dx, 2) + pow(dh, 2) : -1;
            }
    // Minimize rope length for a move between first and last trees
    printf("%d\n", minimize_l(0, num_trees, L));
    return 0;
}