import React, { useState } from 'react';
// import seedColors from "./seedColors";
import Navbar from "./navBar";
import PaletteFooter from "./PaletteFooter";
import ColorBox from './ColorBox';
import { useParams, Link } from 'react-router-dom';
import {generatePalette} from './colorAdjuster';
import { withStyles } from '@mui/styles';
import styles  from './styles/StyleMonoColorPalette';



function MonoColorPalette(props){

    const { classes, palettes } = props;
    const {paletteID, colorID} = useParams();
    const [format, setFormat] = useState('hex');

    const paletteFinder = id => palettes.find(palette => palette.id === id);
    const formatChanger = formatVal => {setFormat(formatVal)};


    const palette = generatePalette(paletteFinder(paletteID));
    const {paletteName, emoji, id } = palette;
    const collectShades = (currPalette, colorIDFilter) => {
        let shades = [];
        let allColors = currPalette.colors;

        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorIDFilter)
            )
        }
        return shades.slice(1);
    }

    const shades = collectShades(palette, colorID);
    

    const monoColorBoxes = shades.map(color => (
        <ColorBox 
            key={color.name}
            name={color.name}
            background={color[format]}
            showMore={false}
        />
    ))
    
    return (
        <div className={classes.paletteStyle}>
            <Navbar 
                changeHandler={formatChanger}
                showLeveler={false}
            />
            <h1>{`${shades[0].name.slice(-20, -4)} Color Palette`}</h1>
            <div className={classes.paletteColorStyle}>
                {monoColorBoxes}
             <div className={classes.goBack}>
                 <Link to={`/palette/${id}`} className={classes.backButton} >
                     GO BACK
                 </Link>
             </div>
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji}/>
        </div>
    )
}

export default withStyles(styles)(MonoColorPalette);
