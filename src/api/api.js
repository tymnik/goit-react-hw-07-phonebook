import axios from 'axios';

const apiUrl = 'https://658315ad02f747c8367b08c3.mockapi.io/contacts';

const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
});
