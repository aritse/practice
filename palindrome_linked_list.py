# Approach 1
class Solution(object):
    def isPalindrome(self, head):
        rev = None
        slow = fast = head
        while fast and fast.next:
            fast = fast.next.next
            rev, rev.next, slow = slow, rev, slow.next
        if fast:
            slow = slow.next
        while rev and rev.val == slow.val:
            slow = slow.next
            rev = rev.next
        return not rev

# # Approach 2
# class Solution(object):
#     def isPalindrome(self, head):
#         if not head or not head.next:
#             return True
#         last = self.lastLink(head)
#         if head.val != last.next.val:
#             return False
#         last.next = None
#         return self.isPalindrome(head.next)

#     def lastLink(self, head):
#         while head.next.next:
#             head = head.next
#         return head

# # Approach 3
# class Solution(object):
#     def isPalindrome(self, head):
#         if head is None or head.next is None:
#             return True
#         length = 0
#         link = head
#         while link:
#             length += 1
#             link = link.next
#         half = length // 2
#         print length, half
#         i = 1
#         first = head
#         while i < half:
#             first = first.next
#             i += 1

#         if length % 2:
#             second = first.next.next
#         else:
#             # print first.next.val
#             second = first.next

#         while second:
#             # print first.val, second.val
#             if first.val != second.val:
#                 return False
#             second = second.next
#             print second
#             link = head

#             while link.next and link.next != first:
#                 link = link.next
#             first = link
#         return True
