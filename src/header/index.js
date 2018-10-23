import React, { Component } from 'react'

import '../App.css'

import getContacts from '../data/get-contacts'

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Search by Name</p>
        <textarea onChange={this.props.changeInNameFilter} value={this.props.nameFilter}></textarea>
        <p>Search by State</p>
        <select onChange={this.props.changeInStateFilter} value={this.props.stateFilter}>
          <option value="all">All</option>
          <option value="South Australia">South Australia</option>
          <option value="California">California</option>
          <option value="New York">New York</option>
          <option value="Washington State">Washington State</option>
          <option value="QLD">QLD</option>
          <option value="NSW">NSW</option>
          <option value="Victoria">Victoria</option>
        </select>
      </div>
    )
  }
}

export default Header