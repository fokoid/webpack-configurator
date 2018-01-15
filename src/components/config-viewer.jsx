import React from 'react'
import urlJoin from 'url-join'
import CodeViewer from './code-viewer.jsx'
import ConfigSummary from './config-summary.jsx'

const ConfigView = ({ classes, configs, baseUrl, sendNotification }) => (
  <div>
    <ConfigSummary files={configs.map(config => config.filename)} />
    {configs.map(({filename, language, content}) => <CodeViewer
      key={filename}
      language={language}
      filename={filename}
      url={urlJoin(baseUrl, filename)}
      content={content}
      callbacks={{
        copy: () => sendNotification('Copied to clipboard')
      }}
    />)}
  </div>
)

export default ConfigView
