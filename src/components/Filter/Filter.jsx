import css from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
//import { setFilterAction } from "../../redux/contacts-slice";

export const Filter = ()=>{
    const dispatch = useDispatch();
    const selectFilter = useSelector((state) => state.contacts.filter);
    const onChange = (e)=>{
        const {value} = e.target; 
        //dispatch(setFilterAction(value));   
    }
    return (
        <>
            <label className={css.filter__label} htmlFor="filterInput">Find contact by name</label>
            <input onChange={onChange} className={css.filter__input} id="filterInput" type="text" value={selectFilter}/>
        </>
    )
}

