import { useSelector } from 'react-redux';

export const useContacts = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = Array.isArray(contacts)
    ? contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.number.includes(filter)
      )
    : [];

  return { filteredContacts };
};
