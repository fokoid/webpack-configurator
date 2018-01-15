import React, { Component } from 'react'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'

const ConfigSummary = ({files}) => (
  <ExpansionPanel defaultExpanded>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
    >
      <Typography type='subheading'>Configuration Summary</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <ul>
        {files.map(file => (
          <li key={file}><pre>{file}</pre></li>)
        )}
      </ul>
    </ExpansionPanelDetails>
    <ExpansionPanelActions>
      <Button
        color='accent'
        onClick={() => void console.log('Download all is not yet implemented.')}
      >Download</Button>
      <Button
        raised
        color='accent'
        onClick={() => console.log('Sharing is not yet implemented.')}
      >Share</Button>
    </ExpansionPanelActions>
  </ExpansionPanel>
)

export default ConfigSummary
