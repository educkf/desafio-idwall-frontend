import React, { Component } from 'react'
import './App.scss'

import Signin from './Signin/Signin'
import Feed from './Feed/Feed'

import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'

class App extends Component {
  state = {}

  render() {    
    return (
      <BrowserRouter>
        <div className="App">
            <Route path="/" exact component={Signin} />
            <Route path="/feed" exact component={Feed} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
