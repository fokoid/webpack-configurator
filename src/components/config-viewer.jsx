import React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Button,
  Paper,
  Typography,
  withStyles
} from 'material-ui'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import FileViewer from './file-viewer.jsx'

const styles = {
  root: {
    marginTop: '5em'
  }
}

const ConfigView = ({ classes, configs, sendNotification }) => (
  <div className={classes.root}>
    {configs.map(({name, filename, content}) => <FileViewer
      key={filename}
      title={name}
      filename={filename}
      content={content}
      callbacks={{
        copy: () => sendNotification('Copied to clipboard')
      }}
    />)}
  </div>
)

export default withStyles(styles)(ConfigView)
