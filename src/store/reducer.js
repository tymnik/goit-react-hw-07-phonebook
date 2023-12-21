import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContactsApi, addContactApi, deleteContactApi } from '../api/api';

const fetchContacts = createAsyncThunk('contacts/fetchAll', fetchContactsApi);
const addContact = createAsyncThunk('contacts/addContact', addContactApi);
const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  deleteContactApi
);

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilter } = contactSlice.actions;

export default contactSlice.reducer;
export { fetchContacts, addContact, deleteContact };
