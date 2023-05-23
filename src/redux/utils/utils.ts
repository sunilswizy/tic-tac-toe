import { ticTacState } from "../tic-tac/reducer"

const userMakesMove = (state: ticTacState, id: number) => {

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

    let newState: ticTacState = {
        box: updatedBox,
        nextMove: state.nextMove === 'X' ? 'O' : 'X',
        isCompleted: false,
        winner: null
    };

    return newState;
}

export default userMakesMove;