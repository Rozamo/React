import React from 'react';
import {connect} from 'react-redux';

// Action
function increment() {
    return {
        type: 'INCREMENT',
    };
}
function decrement() {
    return {
        type: 'DECREMENT',
    }
}
function changeNum(num) {
    return {
        type: 'CHANGE_NUM',
        num: num
    }
}
// Counter using redux
function ReduxIncrement(props) {
    function doIncrement() {
        props.increment();
    }
    function doDecrement() {
        props.decrement();
    }
    function doChangeNum(e) {
        props.changeNum(Number(e.target.value));
    }
    return <div>
        <h1>{props.count}</h1>
        <input type="number" onChange={doChangeNum} placeholder={props.num}/>
        <button onClick={doIncrement}>Increment</button>
        <button onClick={doDecrement}>Decrement</button>
    </div>;
};
// Use props to connect to function
function mapStateToProps(state) {
    return {
        count: state.count,
        num: state.num
    };
}
// List of actions
 const mapDispatchToProps = {
    increment,
    decrement,
    changeNum,
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxIncrement);