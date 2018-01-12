import React from 'react'
import urlJoin from 'url-join'
import CodeViewer from './code-viewer.jsx'

const ConfigView = ({ classes, configs, baseUrl, sendNotification }) => (
  <div>
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
