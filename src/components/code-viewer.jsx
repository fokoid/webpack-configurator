import React, { Component } from 'react'
import {
  Button,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Tooltip
  withStyles
} from 'material-ui'
import { ExpandMore as ExpandMoreIcon } from 'material-ui-icons'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  solarizedLight as SolarizedLightTheme,
} from 'react-syntax-highlighter/styles/hljs';

const styles = {
  title: {
    minHeight: '32px',
    height: '32px'
  },
  body: {
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '0px',
    paddingBottom: '0px'
  },
  code: {
    width: '100%'
  }
}

class CodeViewer extends Component {
  state = {
    content: this.props.content
  }

  isDotFile = () => this.props.filename && this.props.filename[0] === '.'

  componentDidMount = async () => {
    if (!this.props.url) return

    try {
      const response = await fetch(this.props.url)
      if (response.status === 200)
        this.setState({ content: await response.text() })
    } catch(err) {
      console.log(err)
    }
  }

  render = () => (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary
        className={this.props.classes.title}
        expandIcon={<ExpandMoreIcon />}
      >
        <pre>{this.props.filename}</pre>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={this.props.classes.body}>
        <SyntaxHighlighter
          className={this.props.classes.code}
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
          href={`data:text/plain,${this.state.content}`}
          download={this.props.filename}
          onClick={this.props.callbacks.download}
          disabled={this.isDotFile()}
        >Download</Button>
        <Button
          dense
          color='primary'
          href={this.props.url}
          target='_blank'
          onClick={this.props.callbacks.open}
        >Open</Button>
        <CopyToClipboard text={this.state.content}>
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

export default withStyles(styles)(CodeViewer)
