import React, {Component} from 'react';

// On click button to increment counter with passing props
let x = 3;
class Counter extends React.Component {
  state = {
    counter: this.props.counter
  }
  increment = () => {
    this.setState({counter: this.state.counter + 1});
  }
  componentDidMount() {
    x += 4;
  }
  render() {
    return (
      <div>
        <h1>{this.state.counter} : {x}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
class ClickIncrement extends Component {
    render() { return <Counter counter={1}/>; }
}
export default ClickIncrement;

// On click button to increment counter with passing props
// let x = 3;
// class Counter extends React.Component {
//   state = {
//     counter: this.props.counter
//   }
//   increment = () => {
//     this.setState({counter: this.state.counter + 1});
//   }
//   componentDidMount() {
//     x += 4;
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.counter} : {x}</h1>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <Counter counter={1}/>,document.getElementById('root')
// );