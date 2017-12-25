import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import PrimaryLayout from 'components/layout'
import 'styles/css/main.scss'


const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

export default App
