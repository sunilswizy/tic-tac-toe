import { ActionTypes } from "./action-types";
import { MakesMove } from "./interface";

export const makeMove = (id: number): MakesMove => ({
    type: ActionTypes.PLAYER_MAKES_MOVE,
    payload: id
})