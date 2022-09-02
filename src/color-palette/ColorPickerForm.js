import React, {Component} from "react";
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import chroma from "chroma-js"; 
import styles from './styles/StylesNewPaletteForm';


class ColorPickerForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            colorSet: this.props.colors[0].colors,
            currentColor: "teal",
            colorName: ""
        }
        this.handleTextValidator = this.handleTextValidator.bind(this);
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.colorHandler = this.colorHandler.bind(this);
    }

    componentDidMount(){
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => this.props.colors.every(
          ({ name }) => name.toLowerCase() !== value.toLowerCase()
        )
      );

        ValidatorForm.addValidationRule('isColorUnique', (value) => 
        this.props.colors.every(
          ({ color }) => color !== this.state.currentColor
        )
      );
    }

    handleTextValidator(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateCurrentColor(newColor)  {
        this.setState({currentColor: newColor.hex})
      }
  
    colorHandler(){
        const {currentColor, colorName} = this.state;
        const newColor = {
            color: currentColor,
            name: colorName
          }
          this.props.enlistColor(newColor)
          this.setState({colorName: ""})
    }

  

    render(){
        const { currentColor, colorName } = this.state;
        const {paletteIsFull, classes} = this.props;

        return (
        <>
            <ChromePicker 
                color={currentColor} 
                onChangeComplete={this.updateCurrentColor}
                className={classes.chrPicker}
            />

            <ValidatorForm onSubmit={this.colorHandler} instantValidate={false}>
                <TextValidator 
                    value={colorName}
                    className={classes.colorName}
                    name='colorName'
                    onChange={this.handleTextValidator}
                    margin="normal"
                    variant="filled"
                    validators={['required', 'isColorNameUnique', 'isColorUnique']}
                    errorMessages={['Please type a color name.', "Sorry, color's name taken.", "Color is already on the palette!"]}

                />

                <Button 
                variant='contained' 
                color="primary" 
                className={classes.addColor}
                type="submit"
                disabled={paletteIsFull}
                style={{
                    backgroundColor: paletteIsFull ? "grey" : currentColor,
                    color: chroma(currentColor).luminance() <= 0.1 ? "#c3cad6" : "#121212"
                  }}
                > 
                {paletteIsFull ? "Palette is Full" : "Add Color"} 
                </Button>

            </ValidatorForm>
        </>
           
        )
    }
}


// export default ColorPickerForm;
export default withStyles(styles)(ColorPickerForm);





 
