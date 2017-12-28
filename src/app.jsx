import React, { Component } from 'react'
import {
  Typography,
  Grid,
  Snackbar,
  withStyles
} from 'material-ui'

import TitleBar from './title-bar.jsx'
import Configurator from './configurator.jsx'
import ConfigViewer from './components/config-viewer.jsx'
import NotificationSnack from './components/notification-snack.jsx'

const styles = {
  root: {
  }
}

class App extends Component {
  state = {
    title: 'Webpack Configurator',
    notification: {
      open: false,
      message: ''
    }
  }

  closeNotification = () => { this.setState({ notification: { open: false } }) }
  sendNotification = (message, key) => { this.setState({ notification: {
    key: key,
    open: true,
    message: message
  } }) }

  render = () => (
    <div className={this.props.classes.app}>
      <TitleBar />
      <Grid container spacing={24}>
        <Grid item xs>
          <Configurator />
        </Grid>
        <Grid item xs>
          <ConfigViewer
            configs={[
              {
              name: 'Webpack Configuration',
              filename: 'webpack.config.js',
              content: 'webpack config :)'
              },
              {
              name: 'Babel',
              filename: '.babelrc',
              content: 'babel config :)'
              },
              {
              name: 'Package Configuration',
              filename: 'package.json',
              content: 'package config :)'
              }
            ]}
            sendNotification={this.sendNotification}
          />
        </Grid>
      </Grid>
      <NotificationSnack
        key={this.state.notification.key}
        open={this.state.notification.open}
        message={this.state.notification.message}
        onClose={this.closeNotification}
      />
    </div>
  )
}

export default withStyles(styles)(App)
