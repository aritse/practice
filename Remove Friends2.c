#define LOCAL 1

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <time.h>

typedef long long int64;
clock_t start_time;
//#define TIME_LIMIT 0.997
#define CUR_TIME ((double)(clock() - start_time) / CLOCKS_PER_SEC)

#define MAX(a, b) ((a) >= (b) ? (a) : (b))
#define MIN(a, b) ((a) <= (b) ? (a) : (b))
#define ABS(a) ((a) >= 0 ? (a) : (-(a)))
#define Swap(a, b) \
    {              \
        int t = a; \
        a = b;     \
        b = t;     \
    }
int GCD(int a, int b)
{
    return b == 0 ? a : GCD(b, a % b);
}

#define INF 2000000009
#define EPS 1e-12
#define PI 3.1415926535897931

#define DEBUG 0
#define trace(msg, ...) \
    if (DEBUG)          \
        fprintf(stderr, "[line %d]: " msg, __LINE__, __VA_ARGS__);

#if LOCAL
#define Get getchar()
#else
#define Get getchar_unlocked()
#endif
int getInt()
{
    int a = 0, s = 1;
    char c = 0;
    while (c < 33)
        c = Get;
    if (c == '-')
    {
        s = -1;
        c = Get;
    }
    while (c > 33)
    {
        a = (a << 3) + (a << 1) + c - '0';
        c = Get;
    }
    return a * s;
}
int64 getInt64()
{
    int64 a = 0, s = 1;
    char c = 0;
    while (c < 33)
        c = Get;
    if (c == '-')
    {
        s = -1;
        c = Get;
    }
    while (c > 33)
    {
        a = (a << 3) + (a << 1) + c - '0';
        c = Get;
    }
    return a * s;
}
int compare(const void *x, const void *y)
{
    int a = *(int *)x, b = *(int *)y;
    return a < b ? -1 : 1;
}
int power(int a, int e)
{
    if (e == 0)
        return 1;
    int s = power(a, e >> 1);
    s = (int64)(s)*s;
    return e & 1 ? (int64)(s)*a : s;
}
int powerM(int a, int e, int m)
{
    if (e == 0)
        return 1 % m;
    int s = powerM(a, e >> 1, m);
    s = ((int64)(s)*s) % m;
    return e & 1 ? ((int64)(s)*a) % m : s;
}

/* Main code begins here */

#define maxi 100000

struct node
{
    int v;
    struct node *next, *prev;
} a[maxi + 5], *left, *right;

int N, K;

int solve()
{
    struct node *prev = NULL, *cur = left, *nxt = NULL;
    while (K > 0)
    {
        nxt = cur->next;
        if (nxt == NULL)
        {
            if (prev == NULL)
            {
                left = NULL;
            }
            else
            {
                prev->next = NULL;
            }
            K--;
            prev = NULL;
            cur = left;
            nxt = NULL;
        }
        else if (cur->v < nxt->v)
        {
            if (prev == NULL)
            {
                left = nxt;
                nxt->prev = NULL;
                prev = NULL;
                cur = left;
                nxt = NULL;
            }
            else
            {
                prev->next = nxt;
                nxt->prev = prev;
                cur = prev;
                prev = prev->prev;
                nxt = NULL;
            }
            K--;
        }
        else
        {
            prev = cur;
            cur = nxt;
        }
    }
    for (cur = left; cur != NULL; cur = cur->next)
        printf("%d ", cur->v);
    printf("\n");
}

int main()
{
    int T = getInt();
    while (T--)
    {
        N = getInt();
        K = getInt();
        int i;
        left = &a[0];
        right = &a[N - 1];
        for (i = 0; i < N; i++)
        {
            a[i].v = getInt();
            if (i == 0)
                a[i].prev = NULL;
            else
                a[i].prev = &a[i - 1];
            if (i == N - 1)
                a[i].next = NULL;
            else
                a[i].next = &a[i + 1];
        }
        solve();
    }
    return 0;
}