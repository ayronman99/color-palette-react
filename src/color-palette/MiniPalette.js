import React from "react";
import styles from "./styles/MiniPaletteStyles";
import { withStyles } from '@mui/styles';
import DeleteIcon from "@material-ui/icons/Delete";




  function MiniPalette(props){
    const { classes, paletteName, emoji, colors, gotoHandler, id, triggerDialog } = props;
   
    
    const miniColorBoxes = colors.map(color => (
        <div 
            className={classes.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}
            />
    ))

    const deletePalette = (e) => {
        e.stopPropagation();
        triggerDialog(id);
    }

    return (
        <div className={classes.root} onClick={()=> gotoHandler(id)}>
           
             <DeleteIcon 
             className={classes.deleteIcon} 
             style={{transition: "all 500ms ease-in-out"}}
             onClick={deletePalette}
             /> 
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
            
        </div>
    )
}


export default React.memo(withStyles(styles)(MiniPalette), () => true);