import css from "./ContactItem.module.css";
import PropTypes from 'prop-types';
import { useDispatch} from "react-redux";
import { deleteContactAction } from "../../redux/contacts-slice";

export const ContactItem = ({contact})=>{
    const dispatch = useDispatch();    
    const onDeleteContact = (e) => {
        const {name} = e.target;
        dispatch(deleteContactAction(name));
    };

    return (
    <li className={css.contactItem}>{[contact.name+": "+contact.number]}
        <button className={css.deleteContactBtn} onClick={onDeleteContact} type="button" name={contact.id}>Delete</button>
    </li>   
    )
};

ContactItem.propTypes = {  
    contact: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,}),
  };
