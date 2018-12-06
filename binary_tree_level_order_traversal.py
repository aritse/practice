class Solution:
    def traverse(self, root, level):
        if root:
            self.tree[level].append(root.val)
            if root.left or root.right:
                if len(self.tree) - 1 <= level:
                    self.tree.append([])
                self.traverse(root.left, level+1)
                self.traverse(root.right, level+1)

    def levelOrder(self, root):
        self.tree = []
        if root:
            self.tree.append([])
            self.traverse(root, 0)
        return self.tree
