import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import {SortableContainer} from "react-sortable-hoc";

const DraggableColorList = SortableContainer(({colors, colorDelete}) => {    
    return (
        
        <div style={{height: "100%"}}>
            {colors.map((color, i) => (
                <DraggableColorBox 
                index={i}
                key={color.name}
                shade={color} 
                click2Delete={() => colorDelete(color.name)}
                />
            ))}
        </div>
    
    
        );
})

export default DraggableColorList;