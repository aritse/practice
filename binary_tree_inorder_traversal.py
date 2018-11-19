# class Solution(object):
#     def inorderTraversal(self, root):
#         if root is None: return []
#         return self.inorderTraversal(root.left) + [root.val]+self.inorderTraversal(root.right)


class Solution(object):
    def inorderTraversal(self, root):
        vals, stack = [], []
        while True:
            while root:
                stack.append(root)
                root = root.left
            if not stack:
                return vals
            node = stack.pop()
            vals.append(node.val)
            root = node.right
