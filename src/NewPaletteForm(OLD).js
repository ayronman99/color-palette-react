import React, {Component} from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import { CssBaseline, Drawer, AppBar, Toolbar, Button, Typography, Divider, IconButton } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import DraggableColorBox from "./DraggableColorBox";

const drawerWidth = 350;

const styles = theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      height: "calc(100vh - 64px)",
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  });
  
  //NewPaletteForm

  class NewPaletteForm extends Component {
      constructor(props){
          super(props);
          this.state = {
            open: false,
            colors: [],
            currColor: 'Purple',
            newName: ""
          };
      }

      componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
          this.state.colors.every(
            ({ name }) => name.toLowerCase() !== value.toLowerCase()
          )
        );

        ValidatorForm.addValidationRule('isColorUnique', (value) => 
          this.state.colors.every(
            ({ color }) => color !== this.state.currColor
          )
        );
    }


    handleDrawerOpen = () => {
      this.setState({ open: true });
    };
  
    handleDrawerClose = () => {
      this.setState({ open: false });
    };

    updateCurrentColor = newColor => {
        this.setState({currColor : newColor.hex})
    }

    enlistColor = () => {
      const newColor = {
        color: this.state.currColor,
        name:this.state.newName
      }
        this.setState({colors: [...this.state.colors, newColor]})
    }

    handleTextValidator = e => {
      this.setState({newName: e.target.value})
    }
  
    render() {
      const { classes, theme } = this.props;
      const { open, colors } = this.state;
  
      return (
        <div className={classes.root}>
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
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap>
                Create your Palette
              </Typography>

              <Button variant='contained' color='primary'>
                 Save Palette
              </Button>

            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <Typography variant="h4"> Pick Your Color Palette </Typography>
            <div>
                <Button variant='contained' color="secondary"> Clear Palette </Button>
                <Button variant='contained' color="primary"> Random Color </Button>
            </div>
                
                <ChromePicker 
                    color={this.state.currColor} 
                    onChangeComplete={this.updateCurrentColor}
                />
                <ValidatorForm onSubmit={this.enlistColor}>
                    <TextValidator 
                      value={this.state.newName}
                      onChange={this.handleTextValidator}
                      validators={['required', 'isColorNameUnique', 'isColorUnique']}
                      errorMessages={['Please type a color name.', "Sorry, color's taken.", "Color is already on the palette!"]}

                    />
                    <Button 
                    variant='contained' 
                    color="primary" 
                    type="submit"
                    style={{backgroundColor: this.state.currColor}}
                    
                    
                > Add Color 
                </Button>
                </ValidatorForm>
                
          </Drawer>
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
                 {colors.map(color => (
                     <DraggableColorBox shade={color} />
                 ))}
          </main>
        </div>
      );
    }
  }


  NewPaletteForm.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles, { withTheme: true })(NewPaletteForm);