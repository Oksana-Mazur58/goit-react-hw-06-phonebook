import { combineReducers } from "redux";
import contactsList from '../../contacts-list'
import types from './phonebook-types'


const contacts = (state = contactsList, { type, peyload }) => {
    switch (type) {
        case types.ADD:
            return [...state, peyload]

        default:
            return state
    }

}
const filter = (state = '', action) => {
    return state
}

export default combineReducers({
    contacts,
    filter
})