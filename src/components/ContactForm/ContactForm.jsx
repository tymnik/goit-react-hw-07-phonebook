import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../store/reducer';
import { formatDate } from 'utils/formatDate';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setContact(prevContact => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isDuplicate = contacts.some(
      existingContact =>
        existingContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    dispatch(
      addContact({
        ...contact,
        id: nanoid(),
        createdAt: formatDate(),
      })
    );

    setContact({
      name: '',
      number: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputForm}>
      <label className={styles.inputLabel}>
        Name:
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
      </label>
      <label className={styles.inputLabel}>
        Number:
        <input
          type="tel"
          name="number"
          value={contact.number}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
      </label>
      <button type="submit" className={styles.addBtn}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
