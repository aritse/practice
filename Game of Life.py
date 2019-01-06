# According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

# Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

# Any live cell with fewer than two live neighbors dies, as if caused by under-population.
# Any live cell with two or three live neighbors lives on to the next generation.
# Any live cell with more than three live neighbors dies, as if by over-population..
# Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
# Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

class Solution:
    def gameOfLife(self, nums):
        m, n = len(nums), len(nums[0])
        neighbors = [(-1, -1), (-1, 0), (-1, +1),
                     ( 0, -1),          ( 0, +1),
                     (+1, -1), (+1, 0), (+1, +1)]

        def count_live(i, j):
            count = 0
            for y, x in neighbors:
                if (0 <= i+y < m) and (0 <= j+x < n) and nums[i+y][j+x] % 2 == 1:
                    count += 1
            return count

        for i in range(m):
            for j in range(n):
                if nums[i][j] == 1:
                    count = count_live(i, j)
                    if count < 2 or count > 3:
                        nums[i][j] = 3 # dead next, but still counted as live currently
                else:
                    count = count_live(i,j)
                    if count == 3:
                        nums[i][j] = 2 # live next, but still counted as dead currently

        for i in range(m):
            for j in range(n):
                if nums[i][j] == 2:
                    nums[i][j] = 1
                if nums[i][j] == 3:
                    nums[i][j] = 0