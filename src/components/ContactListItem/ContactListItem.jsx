import React from 'react';
import styles from './ContactListItem.module.css';
import { formatDate } from '../../store/reducer';

const ContactListItem = ({ contact, onDelete }) => {
  const formattedDate =
    contact && contact.createdAt
      ? formatDate(contact.createdAt, false)
      : 'Date not available';

  return (
    <li className={styles.listItem}>
      {contact.name}: {contact.number} <span>Added on: {formattedDate}</span>
      <button className={styles.delBtn} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
