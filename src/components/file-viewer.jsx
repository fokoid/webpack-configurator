import React, {Component} from 'react'
import {
  Button,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  withStyles
} from 'material-ui'
import { ExpandMore as ExpandMoreIcon } from 'material-ui-icons'
import { CopyToClipboard} from 'react-copy-to-clipboard'
import urlJoin from 'url-join'

const styles = {
  name: {
    flex: 1
  }
}

//TODO Implement downloading of file content
//TODO Implement opening file in new tab
class FileViewer extends Component {
  state = {
    content: this.props.content || 'Loading...'
  }

  fileUrl = urlJoin(this.props.baseurl, this.props.filename)

  componentDidMount = () => {
    console.log(this.fileUrl)
    fetch(this.fileUrl)
    .then(res => res.text())
    .then(text => this.setState({ content: text }))
      .catch(err => console.log(err))
  }

  render = () => (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography type='subheading'>
          <span className={this.props.classes.name}>
            {this.props.title}
          </span>
          <code>{this.props.filename}</code>
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>{this.state.content}</Typography>
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
        <CopyToClipboard text={this.props.content}>
          <Button
            dense
            color='primary'
            onClick={this.props.callbacks.copy}
          >Copy</Button>
        </CopyToClipboard>
      </ExpansionPanelActions>
    </ExpansionPanel>
  )
}

export default withStyles(styles)(FileViewer)
