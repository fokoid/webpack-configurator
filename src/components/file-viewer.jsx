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
import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  solarizedLight as SolarizedLightTheme,
  solarizedDark as SolarizedDarkTheme
} from 'react-syntax-highlighter/styles/hljs';
import urlJoin from 'url-join'

const styles = {
  filename: {
    minHeight: '32px',
    height: '32px'
  },
  code: {
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '0px',
    paddingBottom: '0px'
  },
  codeInner: {
    width: '100%'
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
      .then(res => {
        if (res.status === 200)
          return res.text()
        return this.props.content
      })
      .then(text => this.setState({ content: text }))
      .catch(err => console.log(err))
  }

  render = () => (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary
        className={this.props.classes.filename}
        expandIcon={<ExpandMoreIcon />}
      >
        <code>{this.props.filename}</code>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={this.props.classes.code}>
        <SyntaxHighlighter
          className={this.props.classes.codeInner}
          language={this.props.language}
          style={SolarizedLightTheme}
        >
          {this.state.content}
        </SyntaxHighlighter>
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
