import * as React from 'react';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {Button, Dialog, DialogActions, DialogTitle, Slide} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { withStyles } from '@mui/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });



function PaletteList(props){
    const {palettes, classes, deletePalette} = props;
    const [openDelDiag, setOpenDelDiag] = React.useState(false);
    const [catchPalID, setCatchPalID] = React.useState("");
    const naviTo = useNavigate();

    
    const handleClickOpen = (id) => {
        setOpenDelDiag(true);
        setCatchPalID(id)
    };

    const handleClose = () => {
        setOpenDelDiag(false);
        setCatchPalID("");
    };

    const goToPalette = id => naviTo(`/palette/${id}`);

    const deleteHandler = () => {
        deletePalette(catchPalID);
        handleClose();
    }

     
    return (
        <div className={classes.root}>
               <div className={classes.container}>
                   <nav className={classes.nav}> 
                        <h1> Color Palettes </h1>
                        <Link to="/palette/new"> Create Custom Palette </Link>
                   </nav>
                    <TransitionGroup className={classes.palettes}> 
                        {palettes.map(palette => (
                            <CSSTransition
                            key={palette.id}
                            classNames='fade'
                            timeout={500}
                            > 
                            <MiniPalette 
                                {...palette} 
                                key={palette.id}
                                gotoHandler={goToPalette}
                                triggerDialog={handleClickOpen}
                                id={palette.id}
                                />

                            </CSSTransition>
                        ))}
                    </TransitionGroup>
               </div>
                 <Dialog
                    open={openDelDiag}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                    >
                    <DialogTitle>Do you want to delete this palette?</DialogTitle>
                    <DialogActions>

                    <Button onClick={deleteHandler}>Agree</Button>
                    <Button variant="contained" color="error" onClick={handleClose}>Disagree</Button>

                    

                    </DialogActions>
             </Dialog>
            </div>
    )
}

export default withStyles(styles)(PaletteList);