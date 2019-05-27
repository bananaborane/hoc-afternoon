import React, { Component } from 'react'
import './App.css'

import CurrencyHOC from './Components/CurrencyConverter'

class App extends Component {
  render() {
    return (
      <>
        <h2>Higher Order Component</h2>
        <CurrencyHOC />
      </>
    )
  }
}

export default App