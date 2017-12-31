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
import urlJoin from 'url-join'
import CodeViewer from './code-viewer.jsx'

const styles = {
  root: {
    marginTop: '5em'
  }
}

const ConfigView = ({ classes, configs, baseUrl, sendNotification }) => (
  <div className={classes.root}>
    {configs.map(({filename, language, content}) => <CodeViewer
      key={filename}
      language={language}
      filename={filename}
      url={urlJoin(baseUrl, filename)}
      content={content}
      callbacks={{
        copy: () => sendNotification('Copied to clipboard')
      }}
    />)}
  </div>
)

export default withStyles(styles)(ConfigView)
