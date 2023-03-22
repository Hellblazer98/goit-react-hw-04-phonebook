import React, { useState, useEffect } from "react";
import { ContactsForm } from "./ContactForm/ContactForm";
import { ContactsList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Layout } from "./Layout";
import { GlobalStyles } from "./GlobalStyles";

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts) {
    const parsedContacts = JSON.parse(savedContacts);
    return parsedContacts
  }
}


export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts());
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])


  const addContact = newContact => {
    const findName = newContact.name.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === findName)) {
      alert(`${newContact.name} is already in contacts`);
      return
    }

    setContacts(prevState => [...prevState, newContact]);
  }

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
}


  const onFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilter = () => {
    const clearFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(clearFilter)
    );
  };

  const filtredContacts = getFilter();

    return (
      <Layout>
        <GlobalStyles/>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={onFilter} />
        <ContactsList contacts={filtredContacts} onDelete={deleteContact} />
      </Layout>
    )
  
}