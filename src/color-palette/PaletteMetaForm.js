import React from 'react';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';





// import TextField from '@material-ui/core/TextField';
// import DialogContentText from '@material-ui/core/DialogContentText';




class PaletteMetaForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stage: "form",
            newPaletteName: ""
        }
        this.handleTextValidator = this.handleTextValidator.bind(this);
    }

    componentDidMount(){
        ValidatorForm.addValidationRule('doesPaletteExist', (value) => 
        this.props.paletteInfo.every(
          ({ paletteName }) => paletteName.toLowerCase() !==  value.toLowerCase()
        )
      );
    }
    
    handleTextValidator(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClose = () => {
      this.setState({ open: false });
    };

    showEmojiPicker= () => {
      this.setState({stage: "emoji"})
    }

    savePalette = (emoji) => {
      const newPalette = { paletteName: this.state.newPaletteName, emoji: emoji.native}
      this.props.paletteSaver(newPalette)
      this.setState({stage: ""})
    }
    
  
    render() {

        const { handleClickClose } = this.props;
        const { newPaletteName } = this.state;
      return (
        <div>
          <Dialog 
            open={this.state.stage === "emoji"} 
            onClose={handleClickClose}>
              <DialogTitle id="form-dialog-title">Pick your emoji</DialogTitle>
            <Picker onSelect={this.savePalette}/>
             <Button onClick={handleClickClose} color="primary">
                    Close
                </Button>
          </Dialog>

          <Dialog
            open={this.state.stage === "form"}
            onClose={handleClickClose}
            aria-labelledby="form-dial  og-title"
            
          >
            <DialogTitle id="form-dialog-title">Save your palette</DialogTitle>
            <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
                
                <TextValidator 
                    label="Palette Name"
                    value={newPaletteName}
                    name="newPaletteName"
                    onChange={this.handleTextValidator}
                    validators={["required", "doesPaletteExist"]}
                    errorMessages={["Please enter palette name.", "Palette already exist!"]}
                    />
           
                </DialogContent>
                <DialogActions>
                <Button type='submit' color="primary">
                    Save Palette
                </Button>
                <Button onClick={handleClickClose} color="primary">
                    Close
                </Button>
                </DialogActions>
            </ValidatorForm>
          </Dialog>
        </div>
      );
    }
  }


  export default (PaletteMetaForm);