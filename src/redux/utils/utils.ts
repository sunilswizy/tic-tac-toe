import initalBoxState from "../tic-tac/inital-state";
import { TicTacState } from "../tic-tac/reducer";
import { TicTacToe } from "../tic-tac/interface";

export const userMakesMove = (state: TicTacState, id: number) => {

    let updatedBox = state.box.map((each) => {
        if(each.id === id) {
            return {
                ...each,
                value: state.nextMove,
                isTouched: true
            }
        }
        return each
    });

    let gameCompleted = checkGameComplete(updatedBox, state.nextMove)

    let newState: TicTacState = {
        box: updatedBox,
        nextMove: state.nextMove === 'X' ? 'O' : 'X',
        isCompleted: state.movesCount === 8 || gameCompleted,
        playerOneWinCount: (state.nextMove === 'X' && gameCompleted) ? state.playerOneWinCount + 1 : state.playerOneWinCount,
        playerTwoWinCount: (state.nextMove === 'O' && gameCompleted) ? state.playerTwoWinCount + 1 : state.playerTwoWinCount,
        tieCount: (state.movesCount === 8 && !gameCompleted) ? state.tieCount + 1 : state.tieCount,
        movesCount: state.movesCount + 1,
        isTie: state.movesCount === 8 && !gameCompleted
    };

    return newState;
}


function checkGameComplete(box: TicTacToe[], player: 'X' | 'O') {

    let winState = [
        [0, 4, 8],
        [1, 4, 7],
        [2, 4, 6],
        [3, 4, 5],
        [0, 1, 2],
        [0, 3, 6],
        [2, 5, 8],
        [6, 7, 8]
    ];

    for(let [i, j, k] of winState) {
        if(box[i].value === player && box[j].value === player && box[k].value === player) {
            box[i].isWin = true;
            box[j].isWin = true;
            box[k].isWin = true;
            return true;
        }
    }

    return false;
}

export const resetBoard = (state: TicTacState) => {
    let newState: TicTacState = {
        box: initalBoxState,
        nextMove: 'X',
        isCompleted: false,
        isTie: false,
        playerOneWinCount: state.playerOneWinCount,
        playerTwoWinCount: state.playerTwoWinCount,
        tieCount: state.tieCount,
        movesCount: 0
    } 
    
    return newState;
}
