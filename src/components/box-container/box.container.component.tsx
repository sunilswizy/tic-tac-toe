import React from "react";
import Box from "../box/box.component";
import './box.container.styles.css'

const BoxContainer : React.FC = () => {
    return (
        <div className="box-container">
            <Box value="X" bottom right/>
            <Box value="O" bottom right/>
            <Box value="" bottom />
            <Box value="" bottom right/>
            <Box value="" bottom right/>
            <Box value="" bottom/>
            <Box value="" right/>
            <Box value="" right/>
            <Box value=""/>
        </div>
    )
}

export default BoxContainer;