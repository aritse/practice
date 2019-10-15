var isValidSudoku = function (board) {
    var checkDuplicate = digits => {
        const seen = {};
        digits.forEach(digit => {
            if (digit !== '.' && seen[digit]) throw Error;
            else seen[digit] = true;
        });
    };

    var checkRow = rowId => checkDuplicate(board[rowId]);

    var checkColumn = columnId => {
        const digits = [];
        for (let rowId = 0; rowId < 9; rowId++) digits.push(board[rowId][columnId]);
        checkDuplicate(digits);
    }

    var checkSquare = squareId => {
        const digits = [];
        const offset = {
            0: [0, 0], 1: [0, 3], 2: [0, 6],
            3: [3, 0], 4: [3, 3], 5: [3, 6],
            6: [6, 0], 7: [6, 3], 8: [6, 6]
        };
        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++)
                digits.push(board[offset[squareId][0] + i][offset[squareId][1] + j]);
        checkDuplicate(digits);
    }

    for (let i = 0; i < 9; i++) {
        try {
            checkRow(i);
            checkColumn(i);
            checkSquare(i);
        } catch (e) { return false; }
    }
    return true;
}


/* Very cool solution found online */
var isValidSudoku2 = function (board) {
    const rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const columns = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const squares = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

    for (let rowId = 0; rowId < 9; rowId++) {
        for (let columnId = 0; columnId < 9; columnId++) {
            const digit = board[rowId][columnId];
            if (digit === '.') continue;
            const squareId = Math.floor(columnId / 3) + Math.floor(rowId / 3) * 3;
            if (squares[squareId][digit] || columns[columnId][digit] || rows[rowId][digit])
                return false;
            squares[squareId][digit] = columns[columnId][digit] = rows[rowId][digit] = true;
        }
    }
    return true;
}