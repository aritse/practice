#include <bits/stdc++.h>
using namespace std;
vector<long> heap;
int ptr = -1;
void heapify();
void swap(int, int);
int main()
{
    long t, var;
    cin >> t;
    while (t--)
    {
        cin >> var;
        ptr++;
        heap.push_back(var);
        heapify();
    }
    return 0;
}
void heapify()
{
    int max = 0, max1 = 0;
    if (ptr < 2)
    {
        cout << -1 << "\n";
        return;
    }
    int i, par;
    i = ptr;
    par = (i - 1) / 2;
    while (par >= 0 && heap[par] < heap[i])
    {
        swap(i, par);
        i = par;
        par = (i - 1) / 2;
    }
    max = heap[1] > heap[2] ? heap[1] : heap[2];
    max1 = heap[1] ^ heap[2] ^ max;
    for (i = 3; i < 7 && i < ptr + 1; i++)
        if (heap[i] > max1)
            max1 = heap[i];
    cout << heap[0] << " " << max << " " << max1 << "\n";
}
void swap(int i, int par)
{
    int temp;
    temp = heap[par];
    heap[par] = heap[i];
    heap[i] = temp;
}