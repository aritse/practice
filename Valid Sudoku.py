# Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be
# validated according to the following rules:

# Each row must contain the digits 1-9 without repetition.
# Each column must contain the digits 1-9 without repetition.
# Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without
# repetition.

import collections


class Solution(object):
    def isDuplicated(self, nums):
        for d, c in collections.Counter(nums).items():
            if d != '.' and c > 1:
                return True

    def isValidSudoku(self, board):
        boardT = list(zip(*board))  # board transpose

        # check by row and column
        for i in range(9):
            if self.isDuplicated(board[i]) or self.isDuplicated(boardT[i]):
                return False

        # check 3x3 boxes
        for i in range(3):
            for j in range(3):
                box = []
                for k in range(3):
                    box.append(board[i*3+k][j*3:j*3+3])
                flat = [item for row in box for item in row]
                if self.isDuplicated(flat):
                    return False

        return True
