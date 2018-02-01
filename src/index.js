import React from 'react'
import { render } from 'react-snapshot';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Theme from './styles/theme'
import './styles/index.css'

import App from './App'

import registerServiceWorker from './registerServiceWorker'

render(
  <MuiThemeProvider theme={Theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
