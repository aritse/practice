void main()
{
    // read input
    int n, x;
    scanf("%d %d", &n, &x);
    int a[n];
    for (int i = 0; i < n; i++)
        scanf("%d", &a[i]);

    // do selection sort with x steps
    for (int i = 0; i < x; i++)
    {
        int min = i;
        for (int j = i + 1; j < n; j++)
            if (a[j] < a[min])
                min = j;
        int temp = a[min];
        a[min] = a[i];
        a[i] = temp;
    }

    // print the array
    for (int i = 0; i < n; i++)
        printf("%d ", a[i]);
}