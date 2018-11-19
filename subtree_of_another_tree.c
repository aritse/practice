class Solution(object) : pre_s = [] pre_t = [] def Preorder(self, root) : if root is None : self.pre.append('N') if root : self.pre.append(root.val)
                                                                                                                               self.Preorder(root.left)
                                                                                                                                   self.Preorder(root.right)

                                                                                                                                       def isSubtree(self, s, t) : self.Preorder(s)
                                                                                                                                                                       print self.pre
