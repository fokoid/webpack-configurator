import React, { Component } from 'react'
import {
  Grid,
  withStyles
} from 'material-ui'

import TitleBar from './title-bar.jsx'
import Configurator from './configurator.jsx'
import ConfigView from './config-view.jsx'

const styles = {
  root: {
  },

}

class App extends Component {
  state = {
    title: 'Webpack Configurator'
  }

  render = () => (
    <div className={this.props.classes.app}>
      <TitleBar />
      <Grid container spacing={24}>
        <Grid item xs>
          <Configurator />
        </Grid>
        <Grid item xs>
          <ConfigView
            config={{
              webpack: 'webpack config :)',
              babel: 'babel config :)',
              package: 'package config :)'
            }}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(App)
