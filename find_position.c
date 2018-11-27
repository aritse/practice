/*
You have been given an A array consisting of N integers. All the elements in this array are guaranteed to be unique. For each position i in the array A you need to find the position  should be present in, if the array was a sorted array. You need to find this for each i and print the resulting solution.

Input Format:

The first line contains a single integer N denoting the size of array A. The next line contains N space separated integers denoting the elements of array A.

Output Format:

Print N space separated integers on a single line , where the Ith integer denotes the position of  if this array were sorted.

Constraints:
1 <= n <= 100
1 <= A[i] <= 100
*/

void swap_by_value(int A[], int i, int j)
{
    int temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

void main()
{
    int n;
    scanf("%d", &n);

    int hash[100]; // keep track of positions
    for (int i = 0; i < 100; i++)
        hash[i] = 0;

    int A[n], copy[n];
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &A[i]);
        copy[i] = A[i];
        hash[A[i] - 1] = i + 1;
    }

    // insertion sort
    for (int i = 0; i < n; i++)
    {
        int j = i;
        while (j > 0 && A[j] < A[j - 1])
        {
            hash[A[j] - 1]--;
            hash[A[j - 1] - 1]++;
            swap_by_value(A, j, j - 1);
            j--;
        }
    }

    // print positions
    for (int i = 0; i < n; i++)
        printf("%d ", hash[copy[i] - 1]);
}