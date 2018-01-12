import React, {Component} from 'react'
import {FormControl, FormLabel, FormControlLabel} from 'material-ui/Form'
import Radio, {RadioGroup} from 'material-ui/Radio'
import Typography from 'material-ui/Typography'

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
