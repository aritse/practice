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

#define MIN(a, b) (((a) < (b)) ? (a) : (b))
#define MAX(a, b) (((a) > (b)) ? (a) : (b))
#define _lu unsigned long int
#define _lli long long int
#define UNLIMITED pow(10, 18)

_lli minimize_l(_lu start, _lu end, _lli L[][end])
{
    if (start < end)
    {
        for (_lu i = start + 1; i < end; i++)
            L[start][end] = MIN(L[start][end], MAX(minimize_l(start, i, L), minimize_l(i, end, L)));
        return L[start][end];
    }
    return -1;
}

int main()
{
    // Read input (num of trees and their coordinates & heights)
    _lu num_trees;
    scanf("%lu", &num_trees);
    _lu X[num_trees], H[num_trees];
    for (_lu i = 0; i < num_trees; i++)
        scanf("%lu %lu", &X[i], &H[i]);

    // Calculate rope length for climb between pair of trees
    _lli L[num_trees][num_trees];
    for (_lu start = 0; start < num_trees; start++)
        for (_lu finish = 0; finish < num_trees; finish++)
            if (start < finish)
            {
                _lu dx = X[finish] - X[start];
                _lu dh = H[finish] - H[start];
                L[start][finish] = dx > dh ? pow(dx, 2) + pow(dh, 2) : UNLIMITED;
            }
            else if (start > finish)
                L[start][finish] = UNLIMITED;
            else
                L[start][finish] = 0;
    // for (_lu start = 0; start < num_trees; start++) {
    //     for (_lu finish = 0; finish < num_trees; finish++)
    //         printf("%d ", L[start][finish]);
    //     printf("\n");
    // }
    // Minimize rope length for a move between first and last trees
    printf("%lli\n", minimize_l(0, num_trees - 1, L));
    return 0;
}