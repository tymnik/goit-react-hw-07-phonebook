import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../store/reducer';
import { useContacts } from 'utils/contactUtils';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

const ContactList = () => {
  const { filteredContacts } = useContacts();

  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactListItem
          key={id}
          contact={{ name, number, id }}
          onDelete={() => handleDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
