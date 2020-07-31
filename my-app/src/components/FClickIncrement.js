import React, {Component, useState} from 'react';

// Using function to achive the same
function FCounter() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter+1);
  }
  return <div>
    <h1>{counter}</h1>
    <button onClick={increment}>Increment</button>
  </div>;
}
class FClickIncrement extends Component {
  render() { return <FCounter/>; }
}
export default FClickIncrement;

// Using function to achive the same
// function FCounter() {
//   const [counter, setCounter] = useState(0);
//   function increment() {
//     setCounter(counter+1);
//   }
//   return <div>
//     <h1>{counter}</h1>
//     <button onClick={increment}>Increment</button>
//   </div>;
// }
// ReactDOM.render(
//   <FCounter/>, document.getElementById('root')
// );