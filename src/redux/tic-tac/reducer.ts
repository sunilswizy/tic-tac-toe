import initalBoxState from "./inital-state";
import { TicTacToe, Actions } from "./interface";
import { ActionTypes } from "./action-types";
import { userMakesMove, resetBoard} from "../utils/utils";

export interface TicTacState {
    box: TicTacToe[],
    nextMove: 'X' | 'O',
    isCompleted: boolean,
    isTie: boolean,
    playerOneWinCount: number,
    playerTwoWinCount: number,
    tieCount: number,
    movesCount: number
}

const initalState: TicTacState = {
    box: initalBoxState,
    nextMove: 'X',
    isCompleted: false,
    isTie: true,
    playerOneWinCount: 0,
    playerTwoWinCount: 0,
    tieCount: 0,
    movesCount: 0
}

const reducer = (state: TicTacState = initalState, action: Actions): TicTacState => {
    switch(action.type) {
        case ActionTypes.PLAYER_MAKES_MOVE: {
            let newState = userMakesMove(state, action.payload);
            return newState;
        }  
        case ActionTypes.RESTART_GAME: {
            return resetBoard(state);
        }
        default:
            return state;
    }
};

export default reducer;