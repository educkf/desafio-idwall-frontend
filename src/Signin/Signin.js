import React, { Component } from 'react'
import './Signin.scss'

class Signin extends Component {
  state = {}


  render() {
    return (
      <div className="Login">
          <div>
            <h1>The <span>IDDOG</span></h1>
          </div>
          <form id="signin">
            <input type="text" placeholder="Your e-mail" /> 
          </form>
      </div>
    )
  }
}

export default Signin
