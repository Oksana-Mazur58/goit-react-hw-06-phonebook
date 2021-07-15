import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from "./phonebook-actions";
// import types from "./contacts-types";
import contacts from "../../contacts-list";



// const names = [
  // ([] = names)
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

const items = createReducer(contacts, {
  [actions.addContact]: (state, { payload }) => {
    if (state.map(({ name }) => name).includes(payload.name)) {
      return alert(`${payload.name} is already in contacts`);
    } 
      return [payload, ...state];
  },

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});


const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});


// const contacts = (state =  contactsDefault, { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload];
        
//         case types.DELETE:
//             return state.filter(contact=>contact.id !==payload)
//         default:
//             return state;
//     }

// }
// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case types.CHANGE_FILTER:
//             return  payload;
        
//         case types.DELETE:
//             return state.filter(contact=>contact.id !==payload)
//         default:
//             return state;
//     }

// }

