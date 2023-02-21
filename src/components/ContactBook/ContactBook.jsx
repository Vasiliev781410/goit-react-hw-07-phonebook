import { ContactForm } from "../ContactForm/ContactForm.jsx";
import { Filter } from "../Filter/Filter.jsx";
import { ContactList } from "../ContactList/ContactList.jsx";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getContactsThunk } from "redux/contacts-thunk.js";
import { nanoid } from 'nanoid';

export const ContactBook = () => {  
  const selectContacts = useSelector((state) => {
    //console.log('ContactBook ',state.contacts.contacts.items); 
    return state.contacts.contacts.items;
  });
  
  const selectFilter = useSelector((state) => state.contacts.filter);  
  const dispatch = useDispatch(); 
  
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  
 function  filterContact(){
    //console.log('filterContact() ', selectContacts);        
    return selectContacts.filter(contact=>{
      //console.log('filterContact() ', contact); 
      return contact.name.toLowerCase().includes(selectFilter.toLowerCase())
    });      
 }

  return (
      <>      
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />            
        <ContactList key={nanoid()} list={filterContact()}/>
      </>
    );
 
};


