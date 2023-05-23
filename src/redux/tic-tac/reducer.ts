import initalBoxState from "./inital-state";
import { TicTacToe, MakesMove } from "./interface";
import { ActionTypes } from "./action-types";
import userMakesMove from "../utils/utils";

export interface ticTacState {
    box: TicTacToe[],
    nextMove: 'X' | 'O',
    isCompleted: boolean,
    winner: 'P1' | 'P2' | null
}

const initalState: ticTacState = {
    box: initalBoxState,
    nextMove: 'X',
    isCompleted: false,
    winner: null
}

const reducer = (state: ticTacState = initalState, action: MakesMove): ticTacState => {
    switch(action.type) {
        case ActionTypes.PLAYER_MAKES_MOVE: {
            let newState = userMakesMove(state, action.payload);
            console.log("new", newState)
            return newState;
        }  
        default:
            return state;
    }
};

export default reducer;