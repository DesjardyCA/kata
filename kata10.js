var whiteQueen = [0, 5];
var blackQueen = [5, 0];
var whiteQueen2 = [0, 0];
var blackQueen2 = [7, 5];
var board = [];

var generateBoard = function(wQueen, bQueen){
    for(var x = 0; x < 8; x++){
        board[x] = [];
        for(var y = 0; y < 8; y++){
            board[x][y] = 0;
        }
    }

    board[wQueen[1]][wQueen[0]] = 1;
    board[bQueen[1]][bQueen[0]] = 1;

    return board;
}

var queenThreat = function(board){
    var queenPos = [];

    for(var y = 0; y < board.length; y++){
        var x = board[y].indexOf(1)

        if(x != -1){
        queenPos.push([x, y]);
        }
    }

    if(queenPos[0][0] == queenPos[1][0] || queenPos[0][1] == queenPos[1][1]){
        return true;
    }
    else if((queenPos[1][0] - queenPos[0][0]) + queenPos[0][1] == queenPos[1][1]){
        return true;
    }
    else if((queenPos[0][0] - queenPos[1][0]) + queenPos[0][1] == queenPos[1][1]){
        return true;
    }

    return false;
}

var generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log("Queen threat: " + queenThreat(generatedBoard));

var generatedBoard2 = generateBoard(whiteQueen2, blackQueen2);
console.log(generatedBoard2);
console.log("Queen threat: " + queenThreat(generatedBoard2));