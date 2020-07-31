import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AddContactForm from './AddContactForm';
import GenContactsList from './GenContactsList';

const initialState = {
    contact: "", 
    contactsList: ["James", "Lilly", "Harry"]
};
function reducerCM(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contactsList: [...state.contactsList, action.contact]
            };
        case 'SET_CONTACT':
            return {
                ...state,
                contact: action.contact
            }
        default:
            return state;
    }
}
const store = createStore(reducerCM);
function ReduxContactManager() {
    return <Provider store={store}>
        <AddContactForm/>
        <GenContactsList/>
    </Provider>;
}

export default ReduxContactManager;
