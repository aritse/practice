/*

Motu and Patlu are very good friends and they love to eat ice-creams. Once they thought of playing a game, so they bought “n” ice-creams from the market of varying heights (may be same). They arranged the ice-creams in a line in random order. Motu starts to eat ice-creams from left to right and Patlu from right to left. The heights of the ice-creams are known.

Motu eats the ice-cream as twice the speed of Patlu (that’s the secret for his health :p ). If, anyone of them is eating the ice-cream , then definitely other one cannot have that ice-cream. However, if both of them reach the same ice-cream, Motu snatches it away from Patlu (he got more power than patlu :( ) and eats it. The winner will be the one who will eat more number of ice-creams.

Since, both of them are too busy in eating ice-creams they forgot to count the number of ice-creams they have already eaten. Can you help them in deciding the winner.

P.S.- Since, ‘WINTER HAS ALREADY ARRIVED’ ,so ice-creams will not melt as it is freezing out there.

Note : Time taken to eat a ice-cream is directly proportional to its height.

Input :

The first line contains one integer t, the number of test cases.

The first line of each test case contains one integer n,the number of ice-creams.

The second line contains a sequence , a1, a2, a3 . . . an where ai denotes height of ith ice-cream.

Output :

For each test case print two new lines.

First line contains two spaced integers, the no. of ice-creams eaten by Motu and Patlu respectively.

Second line contains the name of the winner, if motu eats more no. of icecreams print ‘Motu’ (without inverted commas), if patlu eats more no. of ice-creams print ‘Patlu’ (without inverted commas). In case of Tie print ‘Tie’ (without inverted commas).

*/

#include <stdio.h>
#define MOTU_MOVED 1
#define PATLU_MOVED 2
#define BOTH_MOVED 3

int main()
{
    int t;
    scanf("%d", &t);
    while (t--)
    {
        // read input
        int n;
        scanf("%d", &n);
        float heights[n];
        for (int i = 0; i < n; i++)
            scanf("%f", &heights[i]);

        // solve problem
        int i = 0, j = n - 1;
        int state = MOTU_MOVED;
        while (i < j)
        {
            // Motu's new ice cream height halved
            if (state != PATLU_MOVED)
                heights[i] /= 2;

            if (heights[i] < heights[j])
            {
                heights[j] -= heights[i++];
                state = MOTU_MOVED;
            }
            else if (heights[i] > heights[j])
            {
                heights[i] -= heights[j--];
                state = PATLU_MOVED;
            }
            else
            {
                i++;
                j--;
                state = BOTH_MOVED;
            }
        }

        if ((i == j && state != MOTU_MOVED) || n == 1)
            i++;

        printf("%d %d\n", i, n - i);
        if (i > n - i)
            printf("Motu\n");
        else if (i < n - i)
            printf("Patlu\n");
        else
            printf("Tie\n");
    }
}