#include <stdio.h>
#include <string.h>

#define LEN_OF_NAME 30

int main()
{
    /* Declaring i, j, n, and t variables as integer type. We will store
    integer values in those boxes. i, j, n and t are labels written on those boxes. */
    int i, j, n, t;

    /* Obtain the address of a box that is labeled "n" and give it to scanf
    function. scanf function will read an integer (%d 4 bytes) and store at the address provided.
    And do the same with t. Think of cells in the Matrix movie. */
    scanf("%d %d", &n, &t);

    char names[n][LEN_OF_NAME];

    /* quotients is a label of a box that holds the address of a box that
    holds an integer which is the first element of the array */
    long int quotients[n];

    for (i = 0; i < n; i++)
    {
        /* names is the label on a box that holds the address
        of the box that holds a character. &names[i] means that obtain the address of a box that holds
        a character by calculating names[i] = names + 4 * LEN_OF_NAME * sizeof(char). scanf is told
        to read a string (%s) that is a sequence of characters terminated with '\0' and store these
        characters in boxes starting at the address provided. */
        scanf("%s %ld", &names[i], &quotients[i]);
    }

    for (i = 0; i < t; i++)
    {
        /* We just need to iterate t times. At the end of the loop after t iterations,
        we will have bubbled up (moved to right) t number of elements. */
        for (j = 0; j < n - i - 1; j++)
        {
            if (quotients[j] > quotients[j + 1] ||
                quotients[j] == quotients[j + 1] &&
                    strcmp(names[j], names[j + 1]) < 0)
            {
                // swap based on quotients
                long int temp = quotients[j];
                quotients[j] = quotients[j + 1];
                quotients[j + 1] = temp;

                // swap the names as well accordingly
                /* fan is array of LEN_OF_NAME characters. 'fan' is the
                label written on a box that holds the address of a box that holds a character.
                In other words, 'fan' is the label written on a box that holds the address of
                the first element of the array. You cannot change the content of what is inside the
                fan box. In other words, fan is a constant pointer. */
                char fan[LEN_OF_NAME];
                /* strcpy is a function to copy a string. How does it do it?
                 It needs to know what to copy. How do you tell what to copy?
                 You give it an array. */
                strcpy(fan, names[j]);
                strcpy(names[j], names[j + 1]);
                strcpy(names[j + 1], fan);
            }
        }
    }

    for (i = n - 1; i >= n - t; i--)
        printf("%s\n", names[i]);
    return 0;
}