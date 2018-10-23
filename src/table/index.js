import React, { Component } from 'react'

import '../App.css'

import Row from './row'

import getContacts from '../data/get-contacts'

class Table extends Component {
  constructor(props) {
    super(props);
  }
  
  // Maps each contact in this.props.contacts to createRow()
  createRows() {
    return this.props.contacts.map(this.createRow);
  }
  
  // Extracts data from a contact and returns a Row element
  createRow(contact) {
    let profile = contact.profile;

    let name = contact.firstName + ' ' + contact.lastName;
    let email = contact.email;
    let company = profile.company;
    let state = 'Not Applicable';

    if (profile.hasOwnProperty('address')) {
      if (profile.address.hasOwnProperty('state')) {
        state = profile.address.state;
      }
    }

    return <Row name={name} email={email} company={company} state={state} />
  }

  render(props) {
    return (
      <table className="table">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
          <th>State</th>
        </tr>
        {this.createRows()}
      </table>
    )
  }
}

export default Table