import initalBoxState from "../tic-tac/inital-state";
import { TicTacState } from "../tic-tac/reducer"

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

    let newState: TicTacState = {
        box: updatedBox,
        nextMove: state.nextMove === 'X' ? 'O' : 'X',
        isCompleted: false,
        playerOneWinCount: 0,
        playerTwoWinCount: 0
    };

    return newState;
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
