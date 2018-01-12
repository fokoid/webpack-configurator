import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import SettingsIcon from 'material-ui-icons/Settings'
import HelpIcon from 'material-ui-icons/Help'
import { withStyles } from 'material-ui/styles'

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  }
}

const TitleBar = ({title, classes}) => (
  <div className={classes.root}>
    <AppBar position='static'>
      <Toolbar>
        <Typography className={classes.flex} type='title' color='inherit'>
          Webpack Configurator
        </Typography>
        <IconButton color='contrast'>
          <SettingsIcon />
        </IconButton>
        <IconButton color='contrast'>
          <HelpIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
)

export default withStyles(styles)(TitleBar)
