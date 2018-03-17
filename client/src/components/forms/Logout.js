import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Logout extends Component {

  render() {
    const { onLogoutClick } = this.props

    return (
        <div className="nv-h-l-a nv-h-l-a--k--s tr-link" onClick={() => onLogoutClick()}> 
            Logout 
        </div>
    )
  }

}

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
}