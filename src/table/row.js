import React, { Component } from 'react'

import '../App.css'

import getContacts from '../data/get-contacts'

class Row extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.email}</td>
        <td>{this.props.company}</td>
        <td>{this.props.state}</td>
      </tr>
    )
  }
}

export default Row