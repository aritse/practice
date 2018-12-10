# A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

# The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

# How many possible unique paths are there?

# Approach 1:
# Recursion

# class Solution(object):
#     def uniquePaths(self, m, n):
#         if m > 1 and n > 1:
#             return (self.uniquePaths(m, n-1) + self.uniquePaths(m-1, n))
#         return 1


# Approach 2
# Bottom-up DP

class Solution(object):
    def uniquePaths(self, m, n):
        # build (m x n) matrix filled with 1s
        grid = [[1 for x in range(n)] for y in range(m)]

        # bottom-up
        for i in range(1, m):
            for j in range(1, n):
                grid[i][j] = grid[i][j-1] + grid[i-1][j]
        return grid[m-1][n-1]
