import React from "react";
import './box.styles.css'
import { TicTacToe } from "../../redux/tic-tac/interface";
import { useDispatch, useSelector } from "react-redux";
import { makeMove } from "../../redux/tic-tac/actions";
import { RootState } from "../../redux/root-reducer";


const Box : React.FC<TicTacToe> = ({id, right, bottom, value, isTouched}) => {
    const rightBorder = right ? 'right' : '';
    const bottomBorder = bottom ? 'bottom' : ''
    const AllBorder = `${rightBorder} ${bottomBorder}`;

    const dispatch = useDispatch();
    const { isCompleted } = useSelector((state: RootState) => state.tic)

    const handleClick = (id: number) => {
        if(isTouched || isCompleted) return;
        dispatch(makeMove(id));
        console.log("Click...", id);
    }

    return <div className={`box ${AllBorder}`}>
        <div className="content" onClick={() => handleClick(id)}>
            <h1 className={`text ${value}`}>{ value }</h1>
        </div>
    </div>
}

export default Box;