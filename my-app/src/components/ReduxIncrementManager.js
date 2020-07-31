import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import ReduxIncrement from './ReduxIncrement';

const initialState = {
  count: 0,
  num: 1
};
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + state.num,
        num: state.num
      };
    case 'DECREMENT':
      return {
        count: state.count - state.num,
        num: state.num
      };
    case 'CHANGE_NUM':
      return {
        count: state.count,
        num: action.num
      };
    default: 
      return state;  
  }
}
const store = createStore(reducer);
function ReduxIncrementManager() {
    return <Provider store={store}>
    <ReduxIncrement initialState={initialState}/>
  </Provider>;
}

export default ReduxIncrementManager;
