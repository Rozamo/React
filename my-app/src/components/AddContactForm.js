import React from 'react';
import { connect } from 'react-redux';

// Actions
function addContact(contact) {
    return {
        type: 'ADD_CONTACT',
        contact: contact
    };
}
function setContact(contact) {
    return {
        type: 'SET_CONTACT',
        contact: contact
    };
}
function AddContactForm(props) {
    function doAddContact(e) {
        if (props.contact.length !== 0) {
            props.addContact(props.contact);
            props.setContact("");
        }
        e.preventDefault();
    }
    function doSetContact(e) {
        props.setContact(e.target.value);
    }
    return <form onSubmit={doAddContact}>
        <input type="text" onChange={doSetContact} value={props.contact}/>
        <button type="submit">Add</button>
    </form>;
}
// Used to access state values through props
function mapStateToProps(state) {
    return {
        ...state
    }
}
// Declare functions to be used as actions
const mapDispatchToProps = {
    addContact, setContact
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm);