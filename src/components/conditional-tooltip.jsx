import React from 'react'
import Tooltip from 'material-ui/Tooltip'

const ConditionalTooltip = ({
  enabled,
  text,
  placement = 'bottom',
  children
}) => enabled ? (
  <Tooltip title={text} placement={placement}><div>{children}</div></Tooltip>
) : <>{children}</>

export default ConditionalTooltip
