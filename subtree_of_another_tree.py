class Solution(object):
    def Preorder(self, root):
        if not root:
            return 'N'
        return ' '.join([str(root.val), self.Preorder(root.left), self.Preorder(root.right)])

    def isSubtree(self, s, t):
        pre_s = ' ' + self.Preorder(s)
        pre_t = ' ' + self.Preorder(t)
        if pre_t in pre_s:
            return True
        return False
