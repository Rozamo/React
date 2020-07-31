import React, {Component, useState} from 'react';

// Add, remove, manipulate position and sort contacts
function ContactsList(props) {
  const [contact, setContact] = useState("");
  const [contactsList, setContactsList] = useState(returnLists);
  function returnLists() {
    return props.contacts.map ((val, index) => 
      <li key = {index}>{val}<button type="button" value={index} onClick={handleContactRemove}>Remove</button>
      <button type="button" value={"u"} onClick={(e) => handleContactPosition(e, index)}>Up</button>
      <button type="button" value={"d"} onClick={(e) => handleContactPosition(e, index)}>Down</button></li>);
  }
  function handleAddContact(e) {
    setContact(e.target.value);
  }
  function handleContactSubmit(e) {
    if (contact.length !== 0) {
      props.contacts.push(contact);
      setContactsList(returnLists);
      setContact("");
    }
    e.preventDefault();
  }
  function handleSortContact() {
    props.contacts.sort();
    setContactsList(returnLists);
  }
  function handleContactRemove(e) {
    props.contacts.splice(e.target.value, 1);
    setContactsList(returnLists);  
  }
  function handleContactPosition(e, index) {
    if (e.target.value === "u" && index !== 0)
      props.contacts[index] = [props.contacts[index - 1], props.contacts[index - 1] = props.contacts[index]][0];
    else if (index !== props.contacts.length - 1) 
      props.contacts[index + 1] = [props.contacts[index], props.contacts[index] = props.contacts[index + 1]][0];
    setContactsList(returnLists);  
  }
  return <div>
    <form onSubmit={handleContactSubmit}>
      <input type="text" value={contact} onChange={handleAddContact}/>
      <button type="submit">Click</button>
      <ul>{contactsList}</ul>
      <input type="button" value="Sort" onClick={handleSortContact}/>
    </form>
  </div>;
}
var contacts = ["James", "Lilly", "Harry"];
class ContactManager extends Component {
    render() { return <ContactsList contacts={contacts}/>; }
}
export default ContactManager;

// Add, remove, manipulate position and sort contacts
// function ContactsList(props) {
//   const [contact, setContact] = useState("");
//   const [contactsList, setContactsList] = useState(returnLists);
//   function returnLists() {
//     return props.contacts.map ((val, index) => 
//       <li key = {index}>{val}<button type="button" value={index} onClick={handleContactRemove}>Remove</button>
//       <button type="button" value={"u"} onClick={(e) => handleContactPosition(e, index)}>Up</button>
//       <button type="button" value={"d"} onClick={(e) => handleContactPosition(e, index)}>Down</button></li>);
//   }
//   function handleAddContact(e) {
//     setContact(e.target.value);
//   }
//   function handleContactSubmit(e) {
//     if (contact.length !== 0) {
//       props.contacts.push(contact);
//       setContactsList(returnLists);
//       setContact("");
//     }
//     e.preventDefault();
//   }
//   function handleSortContact() {
//     props.contacts.sort();
//     setContactsList(returnLists);
//   }
//   function handleContactRemove(e) {
//     props.contacts.splice(e.target.value, 1);
//     setContactsList(returnLists);  
//   }
//   function handleContactPosition(e, index) {
//     if (e.target.value === "u" && index !== 0)
//       props.contacts[index] = [props.contacts[index - 1], props.contacts[index - 1] = props.contacts[index]][0];
//     else if (index !== props.contacts.length - 1) 
//       props.contacts[index + 1] = [props.contacts[index], props.contacts[index] = props.contacts[index + 1]][0];
//     setContactsList(returnLists);  
//   }
//   return <div>
//     <form onSubmit={handleContactSubmit}>
//       <input type="text" value={contact} onChange={handleAddContact}/>
//       <button type="submit">Click</button>
//       <ul>{contactsList}</ul>
//       <input type="button" value="Sort" onClick={handleSortContact}/>
//     </form>
//   </div>;
// }
// var contacts = ["James", "Lilly", "Harry"];
// ReactDOM.render (
//   <ContactsList contacts={contacts}/>, document.getElementById('root')
// );
