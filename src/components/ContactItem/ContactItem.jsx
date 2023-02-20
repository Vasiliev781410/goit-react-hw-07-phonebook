import css from "./ContactItem.module.css";
import PropTypes from 'prop-types';
import { useDispatch} from "react-redux";
//import { deleteContactAction } from "../../redux/contacts-slice";
import { deleteContactThunk, getContactsThunk } from "../../redux/contacts-thunk";

export const ContactItem = ({contact})=>{
    const dispatch = useDispatch();    
    const onDeleteContact = (e) => {
        const {id} = e.target;
        dispatch(deleteContactThunk(id))
        .unwrap()
        .then(() => dispatch(getContactsThunk()));    
    };

    return (
    <li className={css.contactItem}>{[contact.name+": "+contact.number]}
        <button className={css.deleteContactBtn} onClick={onDeleteContact} type="button" id={contact.id}>Delete</button>
    </li>   
    )
};

ContactItem.propTypes = {  
    contact: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,}),
  };
