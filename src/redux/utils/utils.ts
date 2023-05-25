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
        isCompleted: gameCompleted,
        playerOneWinCount: (state.nextMove === 'X' && gameCompleted) ? state.playerOneWinCount + 1 : state.playerOneWinCount,
        playerTwoWinCount: (state.nextMove === 'O' && gameCompleted) ? state.playerTwoWinCount + 1 : state.playerTwoWinCount
    };

    return newState;
}


function checkGameComplete(box: TicTacToe[], player: 'X' | 'O') {
    
    return (box[0].value === player && box[4].value === player && box[8].value === player) ||
           (box[1].value === player && box[4].value === player && box[7].value === player) || 
           (box[2].value === player && box[4].value === player && box[6].value === player) ||
           (box[3].value === player && box[4].value === player && box[5].value === player) ||
           (box[0].value === player && box[1].value === player && box[2].value === player) ||
           (box[0].value === player && box[3].value === player && box[6].value === player) ||
           (box[2].value === player && box[5].value === player && box[8].value === player) ||
           (box[6].value === player && box[7].value === player && box[8].value === player)
}


export const resetBoard = (state: TicTacState) => {
    let newState: TicTacState = {
        box: initalBoxState,
        nextMove: 'X',
        isCompleted: false,
        playerOneWinCount: state.playerOneWinCount,
        playerTwoWinCount: state.playerTwoWinCount
    } 
    
    return newState;
}
