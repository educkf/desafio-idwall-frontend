import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

import './Signin.scss'

import Logo from '../Logo/Logo'

class Signin extends Component {
  state = {
    email: '',
    toFeed: false
  }

  handleChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  componentDidMount() {
    const token = localStorage.getItem('token')

    if(token) {
      this.setState({
        toFeed: true
      })
    }

  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    Axios({
      method: 'post',
      url: 'https://iddog-api.now.sh/signup',
      data: '',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      params: {
        email: this.state.email
      }
    }).then((result) => {

      localStorage.setItem('token', result.data.user.token)
      this.setState({
        toFeed: true
      })

    })
  }

  render() {

    if (this.state.toFeed === true) {
      return <Redirect to='/feed' />
    }

    return (
      <div className="Signin">
        <div className="Signin__wrapper">
          <Logo />
          <form id="signin" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Your e-mail" value={this.state.email} onChange={this.handleChange} /> 
          </form>
        </div>
      </div>
    )
  }
}

export default Signin
