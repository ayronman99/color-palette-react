import React, {useState} from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import seedColors from "./seedColors";
import styles from './styles/StylesNewPaletteForm';

import { Drawer, Button, Typography, Divider, IconButton } from '@material-ui/core';


import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DraggableColorList from "./DraggableColorList";
import {arrayMove} from 'react-sortable-hoc';


function NewPaletteForm(props){
    const redirector = useNavigate();
    const { classes, theme, handlePaletteSaver, paletteInfo, maxColors = 20 } = props;
    const [open, SetOpen] = useState(false);
    const [colors, SetColors] = useState(seedColors[0].colors);
    // const [stateNameSetter, SetStateNameSetter] = useState({colorName: "", paletteName: ""});


    /* useEffect(() => {
          Exported to ColorPickerForm.js  
     }) */
  

   const handleDrawerOpen = () => {
      SetOpen(true);
    };
  
   const handleDrawerClose = () => {
      SetOpen(false);
    };


   const enlistColor = (newColor) => {
      SetColors([...colors, newColor]);
    }

  //  const handleTextValidator  = ({ target: { name, value } }) => {
  //   SetStateNameSetter({ ...stateNameSetter, hasChanged: true, [name]: value });
  // }; ------>>>>>>> Moved to seperate function on ColorPickerForm.js && NewPaletteForm

   const paletteSaver = (newPalette) => {
      newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
      newPalette.colors = colors

    //  const createPalette = {
    //    paletteName: newPaletteName,
    //    id: newPaletteName.toLowerCase().replace(/ /g, "-"),
    //    colors: colors
    //   }
     console.log(handlePaletteSaver(newPalette));
     redirector('/')
   }

   const colorDelete = colorName => {
    SetColors(colors.filter(colour => colour.name !== colorName))
   }

   const clearColors = () => {
    SetColors([])
   }

   const addRandomColor = () => {
     const allColors = paletteInfo.map(p => p.colors).flat();
     let rand;
     let randomColor;
     let isDuplicateColor = true;
     while(isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand]
      isDuplicateColor = colors.some(color => color.name === randomColor.name);
     }
    SetColors([...colors, randomColor])
   }

   const paletteIsFull = colors.length >= maxColors;

   const onSortEnd = ({oldIndex, newIndex}) => {
    SetColors(arrayMove(colors, oldIndex, newIndex));
  };

    return (
      <div className={classes.root}>

        <PaletteFormNav 
        open={open} 
        classes={classes}
        paletteInfo={paletteInfo}
        handleDrawerOpen={handleDrawerOpen}
        paletteSaver={paletteSaver}
        />


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
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
            <div className={classes.chrContainer}> 
              <Typography variant="h4" gutterBottom> Pick Your Colors </Typography>

              <div className={classes.buttons}>
                  <Button 
                  variant='contained' 
                  color="secondary" 
                  onClick={clearColors}
                  className={classes.button}
                  > Clear Palette 
                  </Button>

                  <Button 
                  variant='contained' 
                  color="primary" 
                  disabled={paletteIsFull}
                  onClick={addRandomColor}
                  className={classes.button}
                  > 
                  Random Color 
                  </Button>
              </div>
                  {/* imported ColorPickerForm for the Color Picker(obviously!) */}
                
                <ColorPickerForm 
                  colors={colors}
                  enlistColor={enlistColor}
                  paletteIsFull={paletteIsFull}
                />
           </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
               <DraggableColorList
                  colors={colors}
                  colorDelete={colorDelete}
                  axis="xy"
                  onSortEnd={onSortEnd}
               />
        </main>
      </div>
    );

  }

  NewPaletteForm.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  export default withStyles(styles, { withTheme: true })(NewPaletteForm);
