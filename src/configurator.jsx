import React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  withStyles
} from 'material-ui'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import BasicConfigurator from './basic-configurator.jsx'

const styles = {
  root: {
    marginTop: '5em'
  }
}

const Configurator = ({classes}) => (
  <div className={classes.root}>
    <ExpansionPanel expanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography type='subheading'>Basic Configuration</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <BasicConfigurator />
      </ExpansionPanelDetails>
    </ExpansionPanel>

    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography type='subheading'>Advanced Configuration</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          The advanced configurator is not yet implemented.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
)

export default withStyles(styles)(Configurator)
