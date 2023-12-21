import axios from 'axios';

const apiUrl = 'https://658315ad02f747c8367b08c3.mockapi.io/contacts';

const fetchContactsApi = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const addContactApi = async contact => {
  try {
    const response = await axios.post(apiUrl, contact);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteContactApi = async contactId => {
  try {
    await axios.delete(`${apiUrl}/${contactId}`);
    return contactId;
  } catch (error) {
    throw error;
  }
};

export { fetchContactsApi, addContactApi, deleteContactApi };
