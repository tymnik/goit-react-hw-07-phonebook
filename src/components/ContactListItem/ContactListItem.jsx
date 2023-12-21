import React from 'react';
import styles from './ContactListItem.module.css';
import { formatDate } from '../../utils/formatDate';

const ContactListItem = ({ contact, onDelete }) => {
  const currentDate = new Date();

  const formattedDate = () =>
    contact && contact.createdAt
      ? formatDate(contact.createdAt, false)
      : formatDate(currentDate, false);

  return (
    <li className={styles.listItem}>
      <div className={styles.contactItemBlock}>
        {contact.name}:{' '}
        <a href={`tel:${contact.number}`} className={styles.callLink}>
          {contact.number}
        </a>{' '}
      </div>
      <span className={styles.contactCreated}>Added on: {formattedDate()}</span>
      <button className={styles.delBtn} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
