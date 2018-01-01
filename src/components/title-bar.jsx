import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  withStyles
} from 'material-ui'
import SettingsIcon from 'material-ui-icons/Settings'
import HelpIcon from 'material-ui-icons/Help'

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
    <AppBar position='fixed'>
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
