import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Theme from './styles/theme'
import './styles/index.css'

import App from './App'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
