import React from "react";
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from "react-sortable-hoc";
import chroma from "chroma-js"; 
import sizes from "./styles/mdQueriesSizes.js";



const styles = {
     root: {
        position: "relative",
        width: "20%",
        height: "25%",
        margin:"0 auto",
        display: "inline-block",
        cursor: "pointer",
        marginBottom: "-3.5px",
        '&:hover $deleteIcon': {
                color: 'white',
                transform: "scale(1.5)"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "20%"
          },
        [sizes.down("md")]: {
            width: "50%",
            height: "20%"
          },  
        [sizes.down("sm")]: {
            width: "50%",
            height: "10%"
          },
        [sizes.down("xs")]: {
            width: "100%",
            height: "10%"
          },
     },
     boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: props => chroma(props.shade.color).luminance() >= 0.3 ? "#121212" : "#c3cad6",
        letterSpacing: "1px",
        textTransform: "uppercase",
        display: "flex",
        justifyContent: "space-between",
        "& span": {
            overflowWrap: "break-word",
            width: "80%"
        }
    },
    deleteIcon: {
        transition: "all .3s ease-in-out"
    }
}

const DraggableColorBox = SortableElement( props => {
    const {classes, shade, click2Delete} = props;
    return (

        <div className={classes.root} style={{backgroundColor: shade.color}}>

                <div className={classes.boxContent}>
                        <span>{shade.name}</span>
                        <DeleteIcon className={classes.deleteIcon} onClick={click2Delete}/>
                </div>            
        </div>




    )
}) 


export default withStyles(styles)(DraggableColorBox);