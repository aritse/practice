class Solution(object):
    def oddEvenList(self, head):
        if head:
            odd, even = head, head.next
            even_head = even
            while odd.next and even.next:
                odd.next = even.next
                odd = odd.next
                even.next = odd.next
                even = even.next
            odd.next = even_head
        return head