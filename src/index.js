import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import 'typeface-roboto'
import App from './app.jsx'

if ('serviceWorker' in navigator)
  window.addEventListener('load', () =>
    navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('SW registered:', reg))
    .catch(err => console.log('SW registration failed:', err))
  )

const main = document.createElement('main')
document.body.appendChild(main)

const render = Component => {
  ReactDOM.render(<AppContainer><Component /></AppContainer>, main)
}
render(App)

if (module.hot)
  module.hot.accept('./app.jsx', () => render(require('./app.jsx').default))
