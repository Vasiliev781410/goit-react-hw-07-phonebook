import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteContact, getContacts, addContact } from '../api/apiContacts.js';

export const getContactsThunk = createAsyncThunk(
  "contacts/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getContacts();
      return data;
    } catch {
      return rejectWithValue();
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const data = await deleteContact(id);
      return data;    
    } catch {
      return rejectWithValue();
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue, dispatch }) => {
    try {
      const data = await addContact(contact);
      return data;    
    } catch {
      return rejectWithValue();
    }
  }
);


