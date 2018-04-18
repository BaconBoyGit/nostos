import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/*
   When a user is logged in, this is located in the header.
   Allows a user to log out from their account 
   
   Bradley Boutcher and Christine Frandsen 2018
*/

export default class Logout extends Component {

  render() {
    const { onLogoutClick } = this.props

    return (
        <Link to="/" className="nv-h-l-a nv-h-l-a--k--s tr-link" onClick={() => onLogoutClick()}> 
            Logout 
        </Link>
    )
  }

}

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
}