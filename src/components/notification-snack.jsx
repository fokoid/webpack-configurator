import React from 'react'
import { Snackbar } from 'material-ui'

const NotificationSnack = ({key, open, message, onClose}) => (
  <Snackbar
    anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left'
    }}
    autoHideDuration={3000}
    key={key}
    open={open}
    message={message}
    onClose={onClose}
  />
)

export default NotificationSnack
