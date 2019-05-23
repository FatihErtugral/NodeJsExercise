import React, { Component } from 'react'
import { TextField } from '@material-ui/core';



export class ChatInput extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }
   render() {

      return (
         <div style={{padding:'15px', height:'100%'}}>
            <form style={{padding:'0', height:'100%'}}>
               <TextField
                  style={{background:"white", borderColor:"white",margin:'0'}}
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  multiline
                  InputProps={{ style: { background:"white", borderColor:"white",height:50 } }}
                  rowsMax="4"
                  // value={values.multiline}
                  // onChange={handleChange('multiline')}
                  // className={classes.textField}
                  margin="normal"
                  // helperText="hello"
                  variant="outlined"
                  fullWidth
               />
            </form>
         </div>
      );
   }
}