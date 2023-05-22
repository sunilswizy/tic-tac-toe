import React from "react";
import './box.styles.css'

interface Border {
    right?: boolean,
    bottom?: boolean,
    value: 'X' | 'O' | ''  
}

const Box : React.FC<Border> = ({right, bottom, value}) => {
    const rightBorder = right ? 'right' : '';
    const bottomBorder = bottom ? 'bottom' : ''
    const AllBorder = `${rightBorder} ${bottomBorder}`;

    return <div className={`box ${AllBorder}`}>
        <div className="content">
            <h1 className={`text ${value}`}>{ value }</h1>
        </div>
    </div>
}

export default Box;