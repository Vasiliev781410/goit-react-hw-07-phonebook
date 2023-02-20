import { ContactForm } from "../ContactForm/ContactForm.jsx";
import { Filter } from "../Filter/Filter.jsx";
import { ContactList } from "../ContactList/ContactList.jsx";
import { useSelector } from "react-redux";

//https://63f3284ade3a0b242b3bf3a0.mockapi.io/


export const ContactBook = () => {  
  const selectContacts = useSelector((state) => state.contacts.contacts);
  const selectFilter = useSelector((state) => state.contacts.filter);    
  
 function  filterContact(){     
    return selectContacts.filter(contact=>contact.name.toLowerCase().includes(selectFilter.toLowerCase()));      
 }

  return (
      <>      
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />            
        <ContactList list={filterContact()}/>
      </>
    );
 
};


