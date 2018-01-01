import React, {Component} from 'react'
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography
} from 'material-ui'

class BasicConfigurator extends Component {
  render = () => (
    <div>
      <FormControl component="fieldset" required>
        <FormLabel component="legend">Preset</FormLabel>
        <RadioGroup row
          aria-label='preset'
          name='preset'
          value='split'
          onChange={() => {}}
        >
          <FormControlLabel value='single' control={<Radio />} label='Single' />
          <FormControlLabel value='split' control={<Radio />} label='Split' />
        </RadioGroup>
      </FormControl> 
    </div>
  )
}

export default BasicConfigurator
