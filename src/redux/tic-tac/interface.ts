import { ActionTypes } from "./action-types"

export interface TicTacToe {
    id: number
    right: boolean,
    bottom: boolean,
    value: 'X' | 'O' | '',
    isTouched: boolean  
};

export interface MakesMove {
    type: ActionTypes.PLAYER_MAKES_MOVE,
    payload: number
}