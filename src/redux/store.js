// import { combineReducers } from "redux";
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import contactReducer from './phonebook/phonebook-reducer'



const middleware = [...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PURGE, PAUSE,PERSIST,REGISTER]
        }
    }), logger];

const contactsPersistConfig = {
  key: 'contacts',
    storage,
   blacklist: ['filter']
}


const store = configureStore({
    reducer: {
     contacts: persistReducer(contactsPersistConfig, contactReducer) 
},
    middleware,
    devTools: process.env.NODE_ENV === "development",
    
})

const persistor = persistStore(store)

export default { store, persistor }
// const rootReducer = combineReducers({
//     phoneContacts: contactReducer
// })

// const initialState = {}
// const reducer = (state = initialState, action) => {
//     return state
// };
// const store = createStore(rootReducer, composeWithDevTools())

