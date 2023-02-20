import { createSlice } from "@reduxjs/toolkit";
import { deleteContactThunk, getContactsThunk } from "./contacts-thunk";

const handlePending = (state) => {
  state.contacts.isLoading = true;
};
const handleRejected = (state) => {
  state.contacts.error = null;
};

const initialState = {
    contacts: {
      items: [],
      isLoading: false,
      error: null
    },
    filter: ""   
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.rejected, handleRejected)

      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
