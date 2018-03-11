import React, { Component } from 'react'
import './App.scss'

import Signin from './Signin/Signin'
import Feed from './Feed/Feed'

import { BrowserRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

class App extends Component {
  state = {}

  render() {    
    return (
      <BrowserRouter>
        <div className="App">
            <Link to="/"> Signin </Link> 
            <Link to="/feed"> Feed </Link> <br/>

            <Link to={{
              pathname: '/feed',
              search: '?category=hound'
            }}> Hound </Link> 

            <Link to={{
              pathname: '/feed',
              search: '?category=pug'
            }}> Pug </Link> <br/>

            <Link to={{
              pathname: '/feed',
              search: '?category=pug&id=7924'
            }}>Single Hound</Link> 

            <Route path="/" exact component={Signin} />
            <Route path="/feed" exact component={Feed} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
