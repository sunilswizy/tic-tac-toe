import { ActionTypes } from "./action-types";
import { MakesMove, RestartGame } from "./interface";

export const makeMove = (id: number): MakesMove => ({
    type: ActionTypes.PLAYER_MAKES_MOVE,
    payload: id
})

export const restartGame = () : RestartGame => ({
    type: ActionTypes.RESTART_GAME
});