import React, { Component } from 'react'
import { withStyles } from 'material-ui'

import TitleBar from './title-bar.jsx'
import Configurator from './configurator.jsx'
import ConfigView from './config-view.jsx'

const styles = {
  app: {
  }
}

class App extends Component {
  state = {
    title: 'Webpack Configurator'
  }

  render = () => (
    <div className={this.props.classes.app}>
      <TitleBar />
    </div>
  )
}

export default withStyles(styles)(App)
