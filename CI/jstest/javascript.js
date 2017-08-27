let gameboard = [[0, 1, 9, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 0]]


function minesweeper1(gameboard) {
    var arr = []
    for (var value of gameboard) {
        var arrTemp = []
        for (var i in value) {
            if (value[i] !== 9) {
                arrTemp.push(0);
            } else {
                arrTemp.push(9)
            }
        }
        arr.push(arrTemp)
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 9) {
                if (j + 1 < arr[i].length)
                    arr[i][j + 1] += 1;
                if (j - 1 >= 0)
                    arr[i][j - 1] += 1;
                if (i - 1 >= 0)
                    arr[i - 1][j] += 1;
                if (i + 1 < arr.length)
                    arr[i + 1][j] += 1;

                if (i - 1 >= 0 && j - 1 >= 0) {
                    arr[i - 1][j - 1] += 1
                }
                if (i + 1 < arr.length && j + 1 < arr[i].length) {
                    arr[i + 1][j + 1] += 1;
                }
                if (i - 1 >= 0 && j + 1 < arr[i].length) {
                    arr[i - 1][j + 1] += 1;
                }
                if (i + 1 < arr.length && j - 1 >= 0) {
                    arr[i + 1][j - 1] += 1;
                }
            }
        }
    }

    return arraysEqual(arr, gameboard);
}

function arraysEqual(a1, a2) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1) == JSON.stringify(a2);
}

console.log(minesweeper1(gameboard))
