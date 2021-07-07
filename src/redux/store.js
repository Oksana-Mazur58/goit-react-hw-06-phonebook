import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsList from '../contacts-list'
import phoneReducer from './phonebook/phonebook-reducer'

const rootReducer = combineReducers({
    phonebook: phoneReducer
})

const initialState = {}
const reducer = (state = initialState, action) => {
    return state
};
const store = createStore(rootReducer, composeWithDevTools())



export default store