import React, { Component } from "react";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import NewPaletteForm from "./NewPaletteForm";
import MonoColorPalette from "./MonoColorPalette";
import styles from './styles/StylesAppPaletteHolder';
import NotFound from "./Error404";




import {Route, Routes, useLocation} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withStyles } from '@mui/styles';





function Content(props) {

    const { palettes, saveZePalette, deletePalette, classes } = props;
    const location = useLocation();


    return(
        <TransitionGroup className={classes.root}>
                <CSSTransition 
                 classNames='fade'
                 timeout={500}
                 key={location.key}
                 > 
                 <div className={classes.page}>
                    <Routes location={location}>
                         
                            <Route path='/color-palette-react' 
                                element={<PaletteList palettes={palettes} 
                                deletePalette={deletePalette}/>} 
                            />
                            <Route
                                path='/palette/new' 
                                element={<NewPaletteForm 
                                handlePaletteSaver={saveZePalette}
                                paletteInfo={palettes}
                            />}
                            />
                            <Route
                            path='/palette/:paletteID' 
                            element={
                            <Palette 
                                palettes={palettes}/>
                                }
                            />
                            <Route 
                            path='/palette/:paletteID/:colorID' 
                            element={<MonoColorPalette palettes={palettes}/>}
                            />

                            <Route 
                            path="*"
                            element={<NotFound />}
                            />
                        
                    </Routes>
                 </div>
            </CSSTransition>
    </TransitionGroup>
    )
}


class AppPaletteHolder extends Component {
    constructor(props) {
        super(props);
        const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
        this.state = {
                palettes: savedPalettes || seedColors
        }
        // this.paletteFinder = this.paletteFinder.bind(this);
        this.saveZePalette = this.saveZePalette.bind(this);
    }
    
    paletteFinder(id) {
        return this.state.palettes.find(function(palette) {
          return palette.id === id;
        });
    }

    saveZePalette(newPalette){
        this.setState({palettes: [...this.state.palettes, newPalette]}, this.syncToLocalStorage
        )
    }

    syncToLocalStorage = () => {
        window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes))
    }

    deletePalette = (id) => {
        this.setState( st => ({palettes: st.palettes.filter(palette => palette.id !== id)}), this.syncToLocalStorage)
    }
    
    render() { 
        const {palettes} = this.state;
        const {classes} = this.props;
        return (
            <Content 
             palettes={palettes}
             saveZePalette={this.saveZePalette}
             deletePalette={this.deletePalette}
             classes={classes}
            />
        )
    }
}

// export default AppPaletteHolder;
export default withStyles(styles)(AppPaletteHolder);
