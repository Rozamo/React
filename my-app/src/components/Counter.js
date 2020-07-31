import React, {Component} from 'react';

class Counter extends Component {
    render() { return <h1>Hello World {this.props.counter}</h1>; }
}
export default Counter;

// Self incrementing counter
// var counter = 0;
// function show() {
//   counter++;
//   ReactDOM.render(
//     <h1>Hello World {counter}</h1>,
//     document.getElementById('root')
//   );
// }
// setInterval(show, 1000);