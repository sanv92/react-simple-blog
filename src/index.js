import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'store/configure-store'

import App from 'components/app'


ReactDOM.render(
  <Provider store={configureStore}>
    <App />
  </Provider>
  , document.getElementById('app'),
)
