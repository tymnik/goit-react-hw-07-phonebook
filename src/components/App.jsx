import React from 'react';
import { useContacts } from '../utils/contactUtils';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {

const { filteredContacts } = useContacts();

  return (
    <div>
      <h1 style={{ color: '#121849', fontSize: '24px', textAlign: 'center' }}>
        Phonebook
      </h1>
      <ContactForm />
      <h2 style={{ color: '#121849', fontSize: '24px', textAlign: 'center' }}>
        Contacts
      </h2>
      <Filter />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
