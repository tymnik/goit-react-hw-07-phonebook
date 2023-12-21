import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../store/reducer';

export const useContacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name && filter
      ? contact.name.toLowerCase().includes(filter.toLowerCase())
      : true
  );

  return { filteredContacts };
};
