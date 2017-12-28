import React from 'react'
import {
  Button,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions
} from 'material-ui'
import { ExpandMore as ExpandMoreIcon } from 'material-ui-icons'
import { CopyToClipboard} from 'react-copy-to-clipboard'

//TODO Implement downloading of file content
//TODO Implement opening file in new tab
const FileViewer = ({ title, content, filename, callbacks }) => (
  <ExpansionPanel defaultExpanded>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Typography type='subheading'>{title}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography>
        <code>{filename}</code>
        <br />
        {content}
      </Typography>
    </ExpansionPanelDetails>
    <ExpansionPanelActions>
      <Button
        dense
        color='primary'
        onClick={() => { console.log('Downloads not yet implemented.') }}
      >Download</Button>
      <Button
        dense
        color='primary'
        onClick={() => { console.log('Opening in new tab not yet implemented.') }}
      >Open</Button>
      <CopyToClipboard text={content}>
        <Button
          dense
          color='primary'
          onClick={callbacks.copy}
        >Copy</Button>
      </CopyToClipboard>
    </ExpansionPanelActions>
  </ExpansionPanel>
)

export default FileViewer
