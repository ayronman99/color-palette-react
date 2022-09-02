import React, {Component} from "react";
import PaletteMetaForm from "./PaletteMetaForm";
import { CssBaseline, AppBar, Toolbar, Button, Typography, IconButton } from '@material-ui/core';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';

import classNames from 'classnames';

class PaletteFormNav extends Component{
    constructor(props){
        super(props);
        this.state= {
          newPaletteName: "",
          formShowing: false
        }
    }

    handleClickOpen = () => {
      this.setState({ formShowing: true });
    };

    handleClickClose = () => {
      this.setState({ formShowing: false });
    };
  


    render(){
        const {classes, open, paletteSaver, handleDrawerOpen, paletteInfo} = this.props;
       
        return(
            <div>
                <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create your Palette
            </Typography>
          </Toolbar>
           <div className={classes.navBtns}>
              <Button className={classes.saveBtns} variant="contained" color="primary" onClick={this.handleClickOpen}>
                Save
              </Button>

              <Link to="/">
                    <Button className={classes.saveBtns} variant="contained" color="secondary"> Go Back</Button>
                </Link>
              </div>
        </AppBar>
        {this.state.formShowing && (<PaletteMetaForm 
                paletteSaver={paletteSaver}
                paletteInfo={paletteInfo}
                handleClickClose={this.handleClickClose}
                />)}
            </div>
        )
    }
}

export default PaletteFormNav;