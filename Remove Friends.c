/*
After getting her PhD, Christie has become a celebrity at her university, and her facebook profile is full of friend requests. Being the nice girl she is, Christie has accepted all the requests.

Now Kuldeep is jealous of all the attention she is getting from other guys, so he asks her to delete some of the guys from her friend list.

To avoid a 'scene', Christie decides to remove some friends from her friend list, since she knows the popularity of each of the friend she has, she uses the following algorithm to delete a friend.

Algorithm Delete(Friend):
    DeleteFriend=false
    for i = 1 to Friend.length-1
         if (Friend[i].popularity < Friend[i+1].popularity)
            delete i th friend
            DeleteFriend=true
            break
    if(DeleteFriend == false)
        delete the last friend

Input: 
First line contains T number of test cases. First line of each test case contains N, the number of friends Christie currently has and K ,the number of friends Christie decides to delete. Next lines contains popularity of her friends separated by space.

Output: 
For each test case print N-K numbers which represent popularity of Christie friend's after deleting K friends.
*/

#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    long d;
    struct Node *next;
} Node;

typedef Node *pNode;

pNode createNode()
{
    pNode p = (pNode)malloc(sizeof(Node));
    p->next = NULL;
    return p;
}

pNode addNode(pNode head, long d)
{
    pNode p, t = createNode();
    t->d = d;
    if (head)
    {
        p = head;
        while (p->next)
            p = p->next;
        p->next = t;
    }
    else
    {
        head = t;
    }
    return head;
}

pNode deleteNode(pNode head)
{
    if (!head || !head->next)
    {
        return head;
    } // length < 2

    // delete head
    pNode p = head;
    if (head->d < head->next->d)
    {
        head = head->next;
        free(p);
        return head;
    }

    int deleted = 0;
    while (p->next->next)
    {
        if (p->next->d < p->next->next->d)
        {
            pNode t = p->next;
            p->next = p->next->next;
            free(t);
            deleted = 1;
            break;
        }
        p = p->next;
    }

    if (!deleted)
    {
        free(p->next);
        p->next = NULL;
    }

    return head;
}

int main()
{
    int t;
    scanf("%d", &t);
    while (t--)
    {
        // read input into linked list
        long n, k;
        scanf("%li %li", &n, &k);
        pNode head = NULL;
        for (long i = 0; i < n; i++)
        {
            int d;
            scanf("%d", &d);
            head = addNode(head, d);
        }

        // delete k nodes from linked list
        while (k--)
        {
            head = deleteNode(head);
        }

        // print linked list
        pNode p = head;
        while (p)
        {
            printf("%d ", p->d);
            p = p->next;
        }
        printf("\n");
    }
}