import React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Paper,
  Typography,
  withStyles
} from 'material-ui'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'

const styles = {
  root: {
    marginTop: '5em'
  }
}

const ConfigView = ({config, classes}) => (
  <div className={classes.root}>
    <ExpansionPanel expanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography type='subheading'>Webpack Configuration</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>{config.webpack}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>

    <ExpansionPanel expanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography type='subheading'>Babel Configuration</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>{config.babel}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>

    <ExpansionPanel expanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography type='subheading'>Package Configuration</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>{config.package}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
)

export default withStyles(styles)(ConfigView)
