// import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import contactReducer from './phonebook/phonebook-reducer'

const middleware =[...getDefaultMiddleware(), logger]
const store = configureStore({
    reducer: {
        contacts: contactReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV ==="development"
})

export default store
// const rootReducer = combineReducers({
//     phoneContacts: contactReducer
// })

// const initialState = {}
// const reducer = (state = initialState, action) => {
//     return state
// };
// const store = createStore(rootReducer, composeWithDevTools())

