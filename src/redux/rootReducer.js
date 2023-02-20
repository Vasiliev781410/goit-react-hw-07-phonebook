import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contacts-slice";

const persistContactsConfig = {
    key: "contacts",
    storage,
};
const persistedContactsReducer = persistReducer(persistContactsConfig, contactsReducer);

export const rootReducer = combineReducers({
    contacts: persistedContactsReducer,
  });