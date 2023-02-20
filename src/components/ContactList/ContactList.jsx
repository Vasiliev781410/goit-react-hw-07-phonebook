import { ContactItem } from "../ContactItem/ContactItem.jsx";
import PropTypes from 'prop-types';

export const ContactList = ({list})=> (
    <ul className="contactList">
        {list.map(contact => <ContactItem key={contact.id} contact={contact}/>)}       
    </ul>
);

ContactList.propTypes = {  
    list: PropTypes.array,  
  };

