// import types from './phonebook-types'
import shortid from 'shortid'
import { createAction } from '@reduxjs/toolkit'


const addContacts = createAction('contacts/add', (name, number) => {
    return {
        payload: {
       id: shortid.generate(),
       name,
       number,   
        }
  }  
})
const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter')
// const addContacts = (name, number) => ({
//     type: types.ADD,
//     payload: {
//         id: shortid.generate(),
//         name,
//         number,

//     }
// });
// const deleteContact = contactId => ({
//     type: types.DELETE,
//     payload: contactId,
// });

// const changeFilter = value => ({
//     type: types.changeFilter,
//     payload: value
// })
export default { addContacts, deleteContact, changeFilter }