/*
You have been given an integer array A of size N. Each element of the array ranges between 1 and . You need to find the frequency of each distinct element of the array. The elements need to be present in the output in ascending order. You need to print the value and then frequency of each distinct element.

Input Format:

The first line contains a single integer N denoting the size of the array. The next line contains N space separated integers, denoting the elements of the array.

Output Format

For each distinct integer, print its value and then frequency in a new line. The distinct integers should appear in the output in ascending order.
*/

void main()
{
    // read input
    int n;
    scanf("%d", &n);
    int A[n], k = 0;
    for (int i = 0; i < n; i++)
        scanf("%d", &A[i]);

    // find max
    for (int i = 0; i < n; i++)
        if (A[i] > k)
            k = A[i];

    // initialize frequency array
    int B[k + 1];
    for (int i = 0; i <= k; i++)
        B[i] = 0;

    // count frequencies
    for (int i = 0; i < n; i++)
        B[A[i]]++;

    // print frequencies
    for (int i = 0; i <= k; i++)
        if (B[i] > 0)
            printf("%d %d\n", i, B[i]);
}