import types from './phonebook-types'
import shortid from 'shortid'

const addContacts = (name, number) => ({
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        name,
        number,

    }
})
export default { addContacts }