class Solution(object):
    def ll_len(self, h):
        l = 0
        while h:
            l += 1
            h = h.next
        return l

    def getIntersectionNode(self, headA, headB):
        if not (headA and headB):
            return None
        linkA, linkB = headA, headB
        diff = self.ll_len(headA) - self.ll_len(headB)
        if diff > 0:    # Advance A pointer
            for i in range(diff):
                linkA = linkA.next
        if diff < 0:    # Advance B pointer
            for i in range(abs(diff)):
                linkB = linkB.next

        while linkA and linkB:
            if linkA == linkB:
                return linkA
            else:
                linkA = linkA.next
                linkB = linkB.next
        return None
