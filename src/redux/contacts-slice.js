import { createSlice } from "@reduxjs/toolkit";
import { deleteContactThunk, getContactsThunk, addContactThunk } from "./contacts-thunk";

const handlePending = (state) => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.contacts.error = payload;
};

const initialState = {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: ""   
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setFilterAction: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(deleteContactThunk.pending, handlePending) 
      .addCase(addContactThunk.pending, handlePending)    
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.rejected, handleRejected)
      .addCase(addContactThunk.rejected, handleRejected)
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = [...state.contacts.items,payload];
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const {setFilterAction} = contactsSlice.actions;
