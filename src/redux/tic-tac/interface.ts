import { ActionTypes } from "./action-types"

export interface TicTacToe {
    id: number
    right: boolean,
    bottom: boolean,
    value: 'X' | 'O' | '',
    isTouched: boolean,
    isWin: boolean
};

export interface MakesMove {
    type: ActionTypes.PLAYER_MAKES_MOVE,
    payload: number
}

export interface RestartGame {
    type: ActionTypes.RESTART_GAME
}

export type Actions = MakesMove | RestartGame;