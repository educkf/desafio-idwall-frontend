import React, { Component } from 'react'
import './Feed.scss'

class Login extends Component {
  state = {}

  componentDidMount() {
      console.log(this.props)
  }

  render() {
    return (
      <div className="Login">
          <div>
            <h1>Feed!</h1>
            <pre>{JSON.stringify(this.props.location.search)}</pre>
          </div>
      </div>
    )
  }
}

export default Login
