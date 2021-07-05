
import React, { Component } from "react";
import shortid from 'shortid'
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter'



class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',


  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }

  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }

  }

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    }
    const contactNames = this.state.contacts.map(contact => contact.name);
    this.renderContacts(contactNames, contact.name, contact);

  }
  renderContacts = (contactList, contactName, newContact) => {
    if (contactList.includes(contactName)) {
      alert(`${contactName} is already in contacts`)
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, newContact],
      }));
    };
  };


  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value })
  }

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    })
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),

    }))
  }

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts
    return (

      <div>
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h1>Contacts </h1>
        <Filter value={filter}
          onChangeFilter={this.changeFilter} />
        <ContactList
          showContacts={this.getFilteredContacts}
          onDeleteContact={this.deleteContact} />
      </div>


    )
  }

}
export default App;