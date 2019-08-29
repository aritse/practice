// The following code is intended to increment / decrement A and B until A is equal to X and B is equal to Y. Find the bugs!

/*
public static void MakeTheNumbersMatch(int a, int b, int x, int y)
{
    while (a != x && b != y)
    {
        if (a > x)
        {
            a++;
        }
        else
        {
            a--;
        }
        if (b > y)
        {
            b++;
        }
        else
        {
            b--;
        }
    }
}
*/

// We should do nothing if A is equal to X and B is equal to Y which causes the values to converge and terminate the loop.

public static void MakeTheNumbersMatch(int a, int b, int x, int y)
{
    while (a != x && b != y)
    {
        if (a < x)
        {
            a++;
        }
        else if (a > x)
        {
            a--;
        }
        if (b < y)
        {
            b++;
        }
        else if (b > y)
        {
            b--;
        }
    }
}