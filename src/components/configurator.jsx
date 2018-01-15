import React from 'react'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel'
import Typography from 'material-ui/Typography'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import BasicConfigurator from './basic-configurator.jsx'
import AdvancedConfigurator from './advanced-configurator.jsx'

const Configurator = ({configCallback, config}) => (
  <div>
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography type='subheading'>Basic Configuration</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <BasicConfigurator configCallback={configCallback} config={config} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography type='subheading'>Advanced Configuration</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <AdvancedConfigurator />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
)

export default Configurator
