import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class Login extends Component {

    render() {
      const { errorMessage } = this.props

      const textStyle = {
        marginRight: "1%"
    
    }
   

  
      return (
        <ul className="nv-h-l"> 
          <li className="nv-h-l-i" style = {textStyle}>
              { this.props.errorMessage && 
              <input type='text' ref='username' className="form-control txt-f txt-f--sm txt-f--err" placeholder='Email'/>
              }
              { !this.props.errorMessage && 
              <input type='text' ref='username' className="form-control txt-f txt-f--sm" placeholder='Email'/>
              } 
          </li>
          <li className="nv-h-l-i">
              { this.props.errorMessage && 
              <input type='password' ref='password' className="form-control txt-f--err txt-f txt-f--sm" placeholder='Password'/>
              }
              { !this.props.errorMessage && 
              <input type='password' ref='password' className="form-control txt-f txt-f--sm" placeholder='Password'/>
              }
          </li>
          <li className="nv-h-l-i">
            <div onClick={(event) => this.handleClick(event)} className="nv-h-l-a nv-h-l-a--k--s tr-link">
              Login
            </div>
          </li>
          <li className="nv-h-l-i">
              <Link to="/register" className="nv-h-l-a nv-h-l-a--k--s tr-link">
              SignUp
              </Link>
          </li>
        </ul>
      )
    }
  
    handleClick(event) {
      const username = this.refs.username
      const password = this.refs.password
      const creds = { username: username.value.trim(), password: password.value.trim() }
      this.props.onLoginClick(creds)
    }
  }
  
  Login.propTypes = {
    onLoginClick: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
  }