import { combineReducers } from "redux";
import reducer from "./tic-tac/reducer";


const rootReducer = combineReducers({
    tic: reducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;