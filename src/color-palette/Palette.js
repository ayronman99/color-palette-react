import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./navBar";
import PaletteFooter from "./PaletteFooter";
import {generatePalette} from './colorAdjuster';
import { useParams } from 'react-router-dom';
import { withStyles } from '@mui/styles';
import styles from './styles/PaletteStyles';

function Palette(props) {
    const { classes, palettes } = props;
    const {paletteID} = useParams();
    const paletteFinder = id => palettes.find(palette => palette.id === id);

    

    const palette = generatePalette(paletteFinder(paletteID));

    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex');
    const colorBoxes = palette.colors[level].map(palt => (
        <ColorBox 
            key={palt.id} 
            background={palt[format]} 
            name={palt.name} 
            toMono={`/palette/${paletteID}/${palt.id}`}
            showMore
        />
    ))

    const changeLevel = level => {setLevel(level)};

    const formatChanger = formatVal => {setFormat(formatVal)};
    
    return (
       
        <div className={classes.paletteStyle}>
            <Navbar 
            leveler={level} 
            changeLeveler={changeLevel}
            changeHandler={formatChanger}
            showLeveler
            />
            <div className={classes.paletteColorStyle}>
                {colorBoxes}
            </div>
            <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji}/>
        </div>
    )
}


export default withStyles(styles)(Palette);


// switched to functional component due to RRDv6

// class Palette extends Component {
//     constructor(props){
//         super(props);
//         this.state = { level : 500, format: "hex" }
//         this.changeLevel = this.changeLevel.bind(this);
//         this.formatChanger = this.formatChanger.bind(this);
//     }

//     changeLevel(level){
//         this.setState({level})
//     }

//     formatChanger(formatValue){
//         this.setState({format: formatValue})
//     }

//     render(){
//         const {level, format} = this.state;
//         const { colors, paletteName, emoji } = this.props.palette;

//         const colorBoxes = colors[level].map(palt => (
//             <ColorBox key={palt.id} background={palt[format]} name={palt.name} />
//         ))
//         return(
//             <div className="Palette">
//                 <Navbar 
//                 leveler={level} 
//                 changeLeveler={this.changeLevel}
//                 changeHandler={this.formatChanger}
//                 />
//                 <div className="Palette-colors">
//                     {colorBoxes}
//                 </div>
//                 <footer className="Palette-footer">
//                     {paletteName}
//                     <span className="Palette-emoji">
//                         {emoji}
//                     </span>
//                 </footer>
//             </div>
//         )
//     }
// }
