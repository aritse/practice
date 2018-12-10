# Given a nested list of integers, implement an iterator to flatten it.

# Each element is either an integer, or a list -- whose elements may also be integers or other lists.


class NestedIterator(object):
    def __init__(self, nestedList):
        self.list = []
        self.flatten(nestedList)
        self.length = len(self.list)
        self.next_idx = 0

    def flatten(self, nestedList):
        if nestedList:
            for element in nestedList:
                if element.isInteger():
                    self.list.append(element.getInteger())
                else:
                    self.flatten(element.getList())

    def next(self):
        next_val = self.list[self.next_idx]
        self.next_idx += 1
        return next_val

    def hasNext(self):
        return self.next_idx < self.length
