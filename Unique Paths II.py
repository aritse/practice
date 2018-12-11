# A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

# The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

# Now consider if some obstacles are added to the grids. How many unique paths would there be?


class Solution(object):
    def uniquePathsWithObstacles(self, obstacleGrid):
        """
        Observation: swapping the start and end points should
        yield the same number of unique paths.
        1. Initialize the first row such that if there is an obstacle
        on it, then the cells before the obstacle are initialized
        with 1 and the cells after the obstacle (including the obstacle)
        are initialized with None.
        2. Initialize the first column in the same manner as above.
        """

        # Initialization
        rows, cols = len(obstacleGrid), len(obstacleGrid[0])
        obstacle = False
        for i in range(cols):
            if obstacleGrid[0][i]:
                obstacle = True
            if obstacle:
                obstacleGrid[0][i] = 1
        obstacle = False
        for i in range(rows):
            if obstacleGrid[i][0]:
                obstacle = True
            if obstacle:
                obstacleGrid[i][0] = 1
        for i in range(rows):
            for j in range(cols):
                obstacleGrid[i][j] = 0 if obstacleGrid[i][j] else 1

        # bottom-up
        for i in range(1, rows):
            for j in range(1, cols):
                if obstacleGrid[i][j]:
                    obstacleGrid[i][j] = obstacleGrid[i][j-1] + \
                        obstacleGrid[i-1][j]
        return obstacleGrid[rows-1][cols-1]
