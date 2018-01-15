import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Reboot from 'material-ui/Reboot'
import TitleBar from './components/title-bar.jsx'
import Configurator from './components/configurator.jsx'
import ConfigViewer from './components/config-viewer.jsx'
import NotificationSnack from './components/notification-snack.jsx'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import teal from 'material-ui/colors/teal'
import amber from 'material-ui/colors/amber'
import { withStyles } from 'material-ui/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[700]
    },
    secondary: {
      main: amber['A400']
    }
  }
})

const styles = {
  root: {
    overflowX: 'hidden',
    paddingBottom: 8
  }
}

class App extends Component {
  state = {
    title: 'Webpack Configurator',
    notification: {
      id: 0,
      open: false,
      message: ''
    },
    config: {
      split: false,
      babel: true,
      react: false,
      styles: true,
      media: true,
      entry: './src/index.js',
      output: 'bundle.js',
      distDir: 'dist'
    }
  }

  configCallback = name => ({target}) => void this.setState(oldState => ({
    config: {
      ...oldState.config,
      [name]: target.type === 'checkbox' ? target.checked : target.value
    }
  }))

  sendNotification = message => {
    this.setState(oldState => ({
      notification: {
        id: oldState.notification.id+1,
        open: true,
        message: message
      }
    }))
  }
  closeNotification = () => {
    this.setState(oldState => ({
      notification: { ...oldState.notification, open: false }
    }))
  }

  render = () => (
    <MuiThemeProvider theme={theme}>
      <div className={this.props.classes.root}>
        <Reboot />
        <TitleBar />
        <Grid container spacing={16} justify='center'>
          <Grid item xs={12} sm={6} md={5} lg={4} xl={3}>
            <Configurator configCallback={this.configCallback} config={this.state.config} />
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={4} xl={3}>
            <ConfigViewer
              configs={[
                {
                  filename: 'webpack.config.js',
                  language: 'javascript',
                  content: 'webpack config :)'
                },
                {
                  filename: '.babelrc',
                  language: 'json',
                  content: 'babel config :)'
                },
                {
                  filename: 'package.json',
                  language: 'json',
                  content: 'package config :)'
                }
              ]}
              baseUrl='/config/files'
              sendNotification={this.sendNotification}
            />
          </Grid>
        </Grid>
        <NotificationSnack
          id={this.state.notification.id}
          open={this.state.notification.open}
          message={this.state.notification.message}
          onClose={this.closeNotification}
        />
      </div>
    </MuiThemeProvider>
  )
}

export default withStyles(styles)(App)
