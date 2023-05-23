import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import Box from "../box/box.component";
import './box.container.styles.css';
import { RootState } from "../../redux/root-reducer";

const BoxContainer : React.FC = () => {
    const { box, nextMove } = useSelector((state: RootState) => state.tic);
    console.log(box, nextMove)

    useEffect(() => {
        console.log(box, nextMove);
    }, []);

    return (
        <div className="box-container">
            {
                box.map(({...box}) => (
                    <Box key={box.id} {...box} />
                ))
            }
        </div>
    )
}

export default BoxContainer;