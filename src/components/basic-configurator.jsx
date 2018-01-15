import React, {Component} from 'react'
import {FormGroup, FormControlLabel} from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import {withStyles} from 'material-ui/styles'

const styles = theme => ({
  outputTextField: {
    width: '50%',
    marginRight: theme.spacing.unit
  },
  outputDirTextField: {
    width: '47%'
  }
})

const LabelledCheckbox = ({name, label, checked, callback}) => (
  <FormControlLabel
    control={<Checkbox
      name={name}
      value={name}
      checked={checked}
      onChange={callback(name)}
    />}
    label={label}
  />
)
class BasicConfigurator extends Component {
  render = () => (
    <form noValidate autoComplete='off'>
      <FormGroup row>
        <TextField
          id='entry'
          label='Entry'
          fullWidth
          value={this.props.config.entry}
          onChange={this.props.configCallback('entry')}
        />
      </FormGroup>
      <FormGroup row>
        <TextField
          id='output'
          label='Output'
          className={this.props.classes.outputTextField}
          value={this.props.config.output}
          onChange={this.props.configCallback('output')}
        />
        <TextField
          id='distDir'
          label='Directory'
          className={this.props.classes.outputDirTextField}
          value={this.props.config.distDir}
          onChange={this.props.configCallback('distDir')}
        />
      </FormGroup>
      <FormGroup row>
        <LabelledCheckbox
          name='split'
          label='Split Config'
          checked={this.props.config.split}
          callback={this.props.configCallback}
        />
        <LabelledCheckbox
          name='babel'
          label='Transpile ES6+'
          checked={this.props.config.babel}
          callback={this.props.configCallback}
        />
        <LabelledCheckbox
          name='react'
          label='React'
          checked={this.props.config.react}
          callback={this.props.configCallback}
        />
        <LabelledCheckbox
          name='styles'
          label='CSS'
          checked={this.props.config.styles}
          callback={this.props.configCallback}
        />
        <LabelledCheckbox
          name='media'
          label='Images/Fonts'
          checked={this.props.config.media}
          callback={this.props.configCallback}
        />
      </FormGroup>
    </form>
  )
}

export default withStyles(styles)(BasicConfigurator)
