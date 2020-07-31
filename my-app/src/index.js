import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import Counter from './components/Counter';
import ManyProps from './components/ManyProps';
import ClickIncrement from './components/ClickIncrement';
import FClickIncrement from './components/FClickIncrement';
import Form from './components/Form';
import ContactManager from './components/ContactManager';
import ReduxIncrementManager from './components/ReduxIncrementManager';
import ReduxContactManager from './components/ReduxContactManager';
import * as serviceWorker from './serviceWorker';

var counter = 0;
function show() {
  counter++;
  ReactDOM.render(<Counter counter={counter}/>, document.getElementById('counter'));
}
setInterval(show, 1000);
ReactDOM.render(<ManyProps/>, document.getElementById('manyprops'));
ReactDOM.render(<ClickIncrement/>, document.getElementById('clickincrement'));
ReactDOM.render(<FClickIncrement/>, document.getElementById('fclickincrement'));
ReactDOM.render(<Form/>, document.getElementById('form'));
ReactDOM.render(<ContactManager/>, document.getElementById('contactmanager'));
ReactDOM.render(<ReduxIncrementManager/>, document.getElementById('reduxincrement'));
ReactDOM.render(<ReduxContactManager/>, document.getElementById('reduxcontactmanager'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
