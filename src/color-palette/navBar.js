import React, {Component} from "react";
import Slider from 'rc-slider';
import {Link} from 'react-router-dom';
import { IconButton, MenuItem, Select, Snackbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import 'rc-slider/assets/index.css';
import { withStyles } from '@mui/styles';
import styles from "./styles/StylesNavBar"

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {format: "hex", snbarstats: false}
        this.formatHandler = this.formatHandler.bind(this);
        this.closeSnackBar = this.closeSnackBar.bind(this);
    }

    formatHandler(evt){
        this.setState({format: evt.target.value, snbarstats: true});
        this.props.changeHandler(evt.target.value);
    }

    closeSnackBar(){
        this.setState({snbarstats: false})
    }


    render(){
        const {leveler, changeLeveler, showLeveler, classes} = this.props;
        const {format} = this.state;
        return (
            <header className={classes.navbar}>
                <div className={classes.logo}>
                    <Link to='/'>ReactColorPicker</Link>
                </div>
                <div className={classes.goBack}>
                 <Link  to='/'><ArrowBackIcon /></Link>
                </div>
                {showLeveler && (<div>
                    <span>Level: {leveler} </span>
                    <div className={classes.slider}>
                        <Slider 
                            defaultValue={leveler} 
                            min={100} 
                            max={900} 
                            step={100}
                            onAfterChange={changeLeveler}
                        />
                    </div>
                </div>
                )}
                
               
            <div className={classes.selectContainer}>
                <Select value={format} onChange={this.formatHandler}>
                    <MenuItem value='hex'>Hex - #ffffff</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value='rgba'>RGBA - rgba(255,255,255, 1.0)</MenuItem>
                </Select>
            </div>
            <Snackbar 
            anchorOrigin={{vertical: "top", horizontal: "center"}}
            open={this.state.snbarstats}
            autoHideDuration={3000}
            message={<span id='format-msg'>Changed to {format.toUpperCase()}</span>}
            ContentProps={{
                'aria-describedby' : "format-msg"
            }}
            onClose={this.closeSnackBar}
            action={[
                <IconButton
                  onClick={this.closeSnackBar}
                >
                    <CloseIcon 
                    color='inherit'
                    key='close'
                    aria-label='close'
                    />
                </IconButton>
            ]}
            />
            </header>
        )
    }
}

// export default Navbar;
export default withStyles(styles)(Navbar);