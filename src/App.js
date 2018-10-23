import React, { Component } from 'react'

import './App.css'

import Header from './header'
import Table from './table'

import getContacts from './data/get-contacts'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [getContacts],
      queryResults: [],
      nameFilter: '',
      stateFilter: 'all'
    }

    this.changeInNameFilter = this.changeInNameFilter.bind(this);
    this.changeInStateFilter = this.changeInStateFilter.bind(this);
  }
  
  // Setting certain states to have the contacts after
  // promise is returned before page is rendered
  componentDidMount() {
    const contacts = getContacts().then((val) => {
      this.setState({
        contacts: val,
        queryResults: val
      })
    }) 
  }
  
  // Changes the value of this.state.nameFilter
  // and then calls contactsThatMatchQuery()
  // to find contacts which match query data
  changeInNameFilter(event) {
    this.state.nameFilter = event.target.value;
    this.contactsThatMatchQuery();
  };
  
  // Changes the value of this.state.stateFilter
  // and then calls contactsThatMatchQuery()
  // to find contacts which match query data
  changeInStateFilter(event) {
    this.state.stateFilter = event.target.value;;
    this.contactsThatMatchQuery();
  };
 
  // Sets this.state.queryResults based off data
  // from nameFilter and stateFilter
  contactsThatMatchQuery() {
    let contacts = this.state.contacts;
    let validContacts = [];
    let nameFilter = this.state.nameFilter;
    let stateFilter = this.state.stateFilter;
    
    for (let index = 0; index < contacts.length; index++) {
      let contact = contacts[index];
      let fullName = (contact.firstName + ' ' + contact.lastName);
      if (fullName.includes(nameFilter)) {
        validContacts.push(contact)
      }
    }

    if (stateFilter !== 'all') {
      for (let index = 0; index < validContacts.length; index++) {
        let contact = validContacts[index];
        let addressDetails = contact.profile;
        if (addressDetails.hasOwnProperty('address')) {
          addressDetails = contact.profile.address;
          if (addressDetails.hasOwnProperty('state')) {
            if (addressDetails.state !== stateFilter) {
              validContacts.splice(index, 1);
              index--;
            } 
          } else {
            validContacts.splice(index, 1);
            index--;
          }
        } else {
          validContacts.splice(index, 1);
          index--;
        }
      }
    } 
    
    this.setState({
      queryResults: validContacts
    })
  }

  render() {
    return (
      <div>     
        <div className="Toolbar">
          <Header nameFilter={this.state.nameFilter} stateFilter={this.state.stateFilter} contacts={this.state.contacts} changeInNameFilter={this.changeInNameFilter} changeInStateFilter={this.changeInStateFilter}/>
        </div>
        <div>
          <Table contacts={this.state.queryResults}/>
        </div>
      </div> 
    )
  }
}

export default App

