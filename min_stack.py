class MinStack(object):
    def __init__(self):
        self.array = []
        self.sorted = []

    def push(self, x):
        self.array.append(x)
        self.sorted = sorted(self.array)

    def pop(self):
        top = self.array[len(self.array)-1]
        del self.sorted[self.sorted.index(top)]
        self.array.pop()

    def top(self):
        return self.array[len(self.array)-1]

    def getMin(self):
        return self.sorted[0]
