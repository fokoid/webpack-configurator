import React from 'react'
import { Snackbar } from 'material-ui'

const NotificationSnack = ({id, open, message, onClose}) => (
  <Snackbar
    anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left'
    }}
    autoHideDuration={3000}
    key={id}
    open={open}
    message={message}
    onClose={onClose}
  />
)

export default NotificationSnack
