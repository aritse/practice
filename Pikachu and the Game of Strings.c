/*

Pikachu has recently learnt a new move . He knows he can work hard and convert it into a stronger move . Both the moves  and  contain the same number of letters.

In a single day, Pikachu can increase any letter of move  by one, that is, in a single day, he can convert letter  to ,  to ,  to  and so on. He can also convert letter  to letter . 

Pikachu just realized he also has a hidden ability. It can help him increase any letter of move  by ,  that is, in a single day, he can convert letter  to letter ,  into ,  into  ,  into  and so on.  

Now Pikachu wants to know the minimum number of days in which he can convert the move  into move   ?
 

Constraints:

s and t consists of uppercase English letters only
Input format:

First line contains an integer , the length of strings  and 
Second line contains string  of length 
Third line contains string  of length  
Output format:

Output single line containing the minimum number of days required

*/

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    char s[n], t[n];
    scanf("%s %s", s, t);
    int num_of_days = 0;
    for (int i = 0; i < n; i++)
    {
        int dist = t[i] - s[i];
        if (dist == 0)
            continue;
        else if (dist < 0)
            dist += 26;
        num_of_days += dist / 13;
        num_of_days += dist % 13;
    }
    printf("%d", num_of_days);
}